import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MiniKpiCalculator: React.FC = () => {
    const [totalCharges, setTotalCharges] = useState(5000000);
    const [potentialSavings, setPotentialSavings] = useState(0);

    useEffect(() => {
        // Simplified savings formula (e.g., 3% of total charges)
        const savings = totalCharges * 0.03;
        setPotentialSavings(savings);
    }, [totalCharges]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/,/g, '');
        setTotalCharges(Number(value) || 0);
    };

    return (
        <div className="rounded-lg bg-card-light p-8 shadow-xl border border-border-light space-y-6">
            <div className="text-center">
                <label htmlFor="annual-charges" className="block text-lg font-medium text-muted-light">
                    Enter Your Total Annual Charges
                </label>
                <div className="mt-4 relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl font-semibold text-gray-400">$</span>
                    <input
                        type="text"
                        id="annual-charges"
                        value={totalCharges.toLocaleString()}
                        onChange={handleInputChange}
                        className="w-full text-center text-3xl font-bold rounded-lg border-2 border-border-light bg-background-light p-4 pl-10 pr-4 focus:border-primary focus:ring-primary transition"
                    />
                </div>
            </div>

            <div className="text-center bg-background-light p-6 rounded-lg">
                <p className="text-lg text-muted-light">Potential Annual Savings</p>
                <p className="text-5xl font-extrabold text-primary my-2">
                    ${Math.round(potentialSavings).toLocaleString()}
                </p>
            </div>

            <Link
                to="/resources/kpi-calculator"
                className="block w-full text-center rounded-lg bg-secondary py-4 text-base font-bold text-primary transition-opacity hover:opacity-90"
            >
                Use Full Calculator for Detailed Breakdown
            </Link>
        </div>
    );
};

export default MiniKpiCalculator;