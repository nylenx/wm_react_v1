import React from 'react';
import KpiCalculator from '../components/KpiCalculator';

const KpiCalculatorPage: React.FC = () => {
    return (
        <div className="bg-background-light font-display text-foreground-light">
            <main className="container mx-auto flex-grow px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">RCM KPI Calculator</h2>
                        <p className="mt-4 text-lg text-muted-light">Calculate your Revenue Cycle Management Key Performance Indicators with our easy-to-use tool. Enter your data below to get started.</p>
                    </div>
                    <KpiCalculator />
                </div>
            </main>
        </div>
    );
};

export default KpiCalculatorPage;