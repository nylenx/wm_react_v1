import React, { useState, useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js/auto';

Chart.register(...registerables);

// --- Tooltip Definitions ---
const kpiTooltips = {
    totalPayments: "The total amount of money received from payers and patients during a specific period.",
    totalCharges: "The total dollar amount of all procedures and services billed to payers and patients.",
    totalAdjustments: "The portion of a bill that a practice has agreed not to charge, often due to contracts with insurance companies (contractual adjustments).",
    avgDailyCharges: "The average dollar amount of charges posted to the system each day. Helps calculate Days in A/R.",
    claimsSubmitted: "The total number of claims sent to insurance payers for reimbursement.",
    chargesNotSubmitted: "The value of services rendered but not yet billed. High numbers can indicate a charge lag problem.",
    claimsDenied: "The number of claims rejected by payers. A key indicator of billing accuracy and front-end process effectiveness.",
    claimsResolved: "The number of previously denied claims that have been successfully appealed and paid.",
    firstPassPaid: "The number of claims that are paid correctly on the first submission, without needing any rework or appeal.",
    totalAr: "Total Accounts Receivable. The outstanding money owed to your practice for services rendered.",
    patientPayments: "The total amount of money collected directly from patients for their portion of the bill.",
    patientBalance: "The total outstanding balance owed by patients after insurance has paid its portion."
};

// --- KPI Benchmarks ---
const kpiBenchmarks = {
    collectionPercentage: { good: 95, warn: 90 },
    firstPassYield: { good: 98, warn: 95 },
};

// --- Helper function for KPI status ---
const getKpiStatus = (value: number, benchmark: { good: number; warn: number }) => {
    if (isNaN(value) || value < benchmark.warn) {
        return { colorClass: 'text-red-500', label: 'Needs Improvement' };
    }
    if (value < benchmark.good) {
        return { colorClass: 'text-yellow-500', label: 'Average' };
    }
    return { colorClass: 'text-green-500', label: 'Excellent' };
};


interface InputFieldProps {
    label: string;
    id: string;
    value: number;
    setValue: (value: number) => void;
    max: number;
    step?: number;
    tooltipText?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, value, setValue, max, step = 1, tooltipText }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.target.value));
    };

    return (
        <div>
            <div className="flex items-center gap-2">
                <label htmlFor={id} className="block text-sm font-medium">{label}</label>
                {tooltipText && (
                    <div className="group relative flex items-center">
                        <span className="material-symbols-outlined cursor-help text-sm text-gray-400">info</span>
                        <div className="absolute bottom-full left-1/2 mb-2 w-64 -translate-x-1/2 rounded-md bg-gray-800 px-3 py-2 text-center text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 z-10 pointer-events-none">
                            {tooltipText}
                            <svg className="absolute left-1/2 top-full h-2 w-full -translate-x-1/2 text-gray-800" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                        </div>
                    </div>
                )}
            </div>
            <div className="mt-2 flex items-center gap-4">
                <input
                    type="range"
                    min="0"
                    max={max}
                    step={step}
                    value={value}
                    onChange={handleInputChange}
                    className="h-2 w-full flex-1 cursor-pointer appearance-none rounded-full bg-border-light [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
                />
                <input
                    type="number"
                    id={id}
                    value={value}
                    onChange={handleInputChange}
                    placeholder={value.toLocaleString()}
                    className="w-32 rounded-lg border-border-light bg-background-light p-2 text-right focus:border-primary focus:ring-primary"
                />
            </div>
        </div>
    );
}

const ResultDonut: React.FC<{ value: number; label: string, colorClass: string, statusLabel: string }> = ({ value, label, colorClass, statusLabel }) => (
    <div className="flex flex-col items-center text-center">
        <div className="relative h-36 w-36">
            <svg className="h-full w-full" viewBox="0 0 36 36">
                <path className="text-border-light" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
                <path className={colorClass} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" strokeDasharray={`${value}, 100`} strokeLinecap="round" strokeWidth="4" style={{transition: 'stroke-dasharray 0.5s ease-in-out'}}></path>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`text-3xl font-bold ${colorClass}`}>{isNaN(value) ? 0 : Math.round(value)}%</span>
            </div>
        </div>
        <span className="mt-4 w-full text-sm font-medium">{label}</span>
        <span className={`mt-1 text-xs font-semibold ${colorClass}`}>{statusLabel}</span>
    </div>
);


const KpiCalculator: React.FC = () => {
    // State for all input fields
    const [totalPayments, setTotalPayments] = useState(3200000);
    const [totalCharges, setTotalCharges] = useState(5000000);
    const [totalAdjustments, setTotalAdjustments] = useState(800000);
    const [avgDailyCharges, setAvgDailyCharges] = useState(166667);
    const [claimsSubmitted, setClaimsSubmitted] = useState(5000);
    const [chargesNotSubmitted, setChargesNotSubmitted] = useState(50000);
    const [claimsDenied, setClaimsDenied] = useState(250);
    const [claimsResolved, setClaimsResolved] = useState(200);
    const [firstPassPaid, setFirstPassPaid] = useState(4750);
    const [totalAr, setTotalAr] = useState(1200000);
    const [patientPayments, setPatientPayments] = useState(400000);
    const [patientBalance, setPatientBalance] = useState(600000);

    // State for calculated results
    const [paymentPercentage, setPaymentPercentage] = useState(0);
    const [collectionPercentage, setCollectionPercentage] = useState(0);
    const [firstPassYield, setFirstPassYield] = useState(0);
    const [potentialSavings, setPotentialSavings] = useState(0);

    // Refs for charts
    const roiChartRef = useRef<HTMLCanvasElement>(null);
    const revenueChartRef = useRef<HTMLCanvasElement>(null);
    const chartInstances = useRef<{ roi?: Chart, revenue?: Chart }>({});

    useEffect(() => {
        // Calculations
        const payPercent = (totalPayments / totalCharges) * 100;
        const collectPercent = (totalPayments / (totalCharges - totalAdjustments)) * 100;
        const fpYield = (firstPassPaid / claimsSubmitted) * 100;
        
        // A simple savings formula:
        // Assume we can resolve 80% of denied claims at an average value of $150/claim
        // And improve overall collections by 2%
        const denialRecovery = (claimsDenied * 0.8) * 150;
        const collectionImprovement = (totalCharges * 0.02);
        const savings = denialRecovery + collectionImprovement;

        setPaymentPercentage(payPercent > 100 ? 100 : payPercent);
        setCollectionPercentage(collectPercent > 100 ? 100 : collectPercent);
        setFirstPassYield(fpYield > 100 ? 100 : fpYield);
        setPotentialSavings(savings);

    }, [totalPayments, totalCharges, totalAdjustments, firstPassPaid, claimsSubmitted, claimsDenied]);
    
    useEffect(() => {
        const destroyCharts = () => {
            if (chartInstances.current.roi) chartInstances.current.roi.destroy();
            if (chartInstances.current.revenue) chartInstances.current.revenue.destroy();
        };

        destroyCharts(); // Destroy previous charts before creating new ones

        if (roiChartRef.current && revenueChartRef.current) {
            const roiCtx = roiChartRef.current.getContext('2d');
            const revenueCtx = revenueChartRef.current.getContext('2d');
            
            if (roiCtx && revenueCtx) {
                 chartInstances.current.roi = new Chart(roiCtx, {
                    type: 'bar',
                    data: {
                        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                        datasets: [{
                            label: 'Investment',
                            data: [10000, 10000, 10000, 10000],
                            backgroundColor: '#B0DB9C',
                        }, {
                            label: 'Return',
                            data: [25000, 40000, 60000, 85000],
                            backgroundColor: '#537D5D',
                        }]
                    },
                    options: { 
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            title: { display: true, text: 'ROI Projection (1 Year)' }
                        },
                        scales: { y: { beginAtZero: true, ticks: { callback: (v) => '$' + Number(v) / 1000 + 'K' } } } 
                    }
                });

                // Dynamic Revenue Chart Data
                const currentRevenueData = Array.from({length: 12}, (_, i) => totalPayments / 12 * (1 + (i*0.01)) );
                const projectedRevenueData = Array.from({length: 12}, (_, i) => (totalPayments / 12) * (1.05 + (i*0.02)) );


                chartInstances.current.revenue = new Chart(revenueCtx, {
                    type: 'line',
                    data: {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        datasets: [{
                            label: 'Current Revenue',
                            data: currentRevenueData,
                            borderColor: '#B0DB9C',
                            tension: 0.1,
                            fill: false
                        }, {
                            label: 'Projected Revenue with WaveMicron',
                            data: projectedRevenueData,
                            borderColor: '#537D5D',
                            tension: 0.1,
                            fill: false
                        }]
                    },
                     options: { 
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            title: { display: true, text: 'Revenue Lift Projection' }
                        },
                        scales: { y: { beginAtZero: true, ticks: { callback: (v) => '$' + Number(v) / 1000 + 'K' } } } 
                    }
                });
            }
        }

        return () => destroyCharts();
    }, [totalPayments]); // Rerun chart effect when totalPayments changes to update revenue chart

    const collectionStatus = getKpiStatus(collectionPercentage, kpiBenchmarks.collectionPercentage);
    const firstPassStatus = getKpiStatus(firstPassYield, kpiBenchmarks.firstPassYield);

    return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
            {/* Left Column: Inputs */}
            <div className="space-y-8">
                <div className="space-y-6 rounded-lg bg-card-light p-6 shadow-lg">
                    <h3 className="text-lg font-semibold">Financials</h3>
                    <InputField label="Total Payments ($)" id="total-payments" value={totalPayments} setValue={setTotalPayments} max={10000000} tooltipText={kpiTooltips.totalPayments} />
                    <InputField label="Total Charges ($)" id="total-charges" value={totalCharges} setValue={setTotalCharges} max={10000000} tooltipText={kpiTooltips.totalCharges} />
                    <InputField label="Total Adjustments ($)" id="total-adjustments" value={totalAdjustments} setValue={setTotalAdjustments} max={10000000} tooltipText={kpiTooltips.totalAdjustments} />
                    <InputField label="Average daily charges ($)" id="avg-daily-charges" value={avgDailyCharges} setValue={setAvgDailyCharges} max={500000} tooltipText={kpiTooltips.avgDailyCharges} />
                </div>
                <div className="space-y-6 rounded-lg bg-card-light p-6 shadow-lg">
                    <h3 className="text-lg font-semibold">Claims</h3>
                    <InputField label="Total Claims Submitted" id="claims-submitted" value={claimsSubmitted} setValue={setClaimsSubmitted} max={10000} tooltipText={kpiTooltips.claimsSubmitted} />
                    <InputField label="Charges not submitted ($)" id="charges-not-submitted" value={chargesNotSubmitted} setValue={setChargesNotSubmitted} max={1000000} tooltipText={kpiTooltips.chargesNotSubmitted} />
                    <InputField label="No of claims denied" id="claims-denied" value={claimsDenied} setValue={setClaimsDenied} max={10000} tooltipText={kpiTooltips.claimsDenied} />
                    <InputField label="No of claims resolved" id="claims-resolved" value={claimsResolved} setValue={setClaimsResolved} max={10000} tooltipText={kpiTooltips.claimsResolved} />
                    <InputField label="First Pass Claim Paid" id="first-pass-paid" value={firstPassPaid} setValue={setFirstPassPaid} max={10000} tooltipText={kpiTooltips.firstPassPaid} />
                </div>
                <div className="space-y-6 rounded-lg bg-card-light p-6 shadow-lg">
                    <h3 className="text-lg font-semibold">AR &amp; Patient Responsibility</h3>
                    <InputField label="Total AR ($)" id="total-ar" value={totalAr} setValue={setTotalAr} max={10000000} tooltipText={kpiTooltips.totalAr} />
                    <InputField label="Patient Payments ($)" id="patient-payments" value={patientPayments} setValue={setPatientPayments} max={10000000} tooltipText={kpiTooltips.patientPayments} />
                    {/* FIX: The 'value' prop was incorrectly passed the state setter function `setPatientBalance`. It has been corrected to use the state variable `patientBalance`. */}
                    <InputField label="Total Pt balance ($)" id="patient-balance" value={patientBalance} setValue={setPatientBalance} max={10000000} tooltipText={kpiTooltips.patientBalance} />
                </div>
            </div>

            {/* Right Column: Results */}
            <div className="sticky top-24 self-start space-y-6">
                 <div className="rounded-lg bg-card-light p-6 shadow-lg">
                    <h3 className="text-xl font-bold">Your Performance Snapshot</h3>
                    <p className="mt-2 text-sm text-muted-light">Key metrics based on the data you provided.</p>
                    <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <ResultDonut value={paymentPercentage} label="Payment Rate" colorClass="text-primary" statusLabel="Informational"/>
                        <ResultDonut value={collectionPercentage} label="Collection Rate" colorClass={collectionStatus.colorClass} statusLabel={collectionStatus.label}/>
                        <ResultDonut value={firstPassYield} label="First Pass Yield" colorClass={firstPassStatus.colorClass} statusLabel={firstPassStatus.label}/>
                    </div>
                </div>
                <div className="rounded-lg bg-card-light p-6 shadow-lg">
                    <h3 className="text-xl font-bold">Your Savings &amp; ROI</h3>
                    <p className="mt-2 text-sm text-muted-light">A preview based on your inputs.</p>
                    <div className="my-8 text-center">
                        <p className="text-4xl font-extrabold text-primary">${Math.round(potentialSavings).toLocaleString()}</p>
                        <p className="text-sm text-muted-light">Potential Annual Savings</p>
                    </div>
                    <p className="text-xs text-center text-muted-light mb-4">See the full breakdown below</p>
                    <button className="w-full rounded-lg bg-secondary py-3 text-base font-bold text-primary transition-opacity hover:opacity-90">Request a Live Estimate</button>
                </div>
                 <div className="rounded-lg bg-card-light p-6 shadow-lg">
                    <h3 className="text-xl font-bold">Detailed Financial Projections</h3>
                    <p className="mt-2 text-sm text-muted-light">In-depth analysis of your potential savings and return on investment.</p>
                    <div className="mt-8 space-y-6">
                        <div>
                            <h4 className="font-semibold text-center">ROI Projection (1 Year)</h4>
                            <div className="relative mt-4 h-64 md:h-80"><canvas ref={roiChartRef}></canvas></div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-center">Revenue Lift Projection</h4>
                            <div className="relative mt-4 h-64 md:h-80"><canvas ref={revenueChartRef}></canvas></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KpiCalculator;