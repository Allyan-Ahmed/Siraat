import { useEffect, useState } from 'react';
import { getReports } from '../services/reportService';
import useStore from '../store/useStore';
import Trends from './Trends';
import CompareMode from './CompareMode';

const Reports = () => {
    const { user } = useStore();
    const [data, setData] = useState(null);
    const [period] = useState('weekly');

    useEffect(() => {
        if (user) {
            getReports(user.uid, period).then(setData);
        }
    }, [user, period]);

    if (!data) return <div className="min-h-screen flex items-center justify-center text-white">Loading analytics...</div>;

    return (
        <div className="animate-fade-in-up space-y-8">
            <div>
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Reports & Analytics</h1>
                <p className="text-gray-400">Insights into your performance.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="card bg-gradient-to-br from-gray-800 to-gray-800/50">
                    <h2 className="text-xl font-bold mb-2 text-gray-300">Discipline Score</h2>
                    <div className="flex items-end space-x-2">
                        <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">{data.disciplineScore}</span>
                        <span className="text-xl text-gray-400 mb-2">/10</span>
                    </div>
                </div>
                <div className="card bg-gradient-to-br from-gray-800 to-gray-800/50">
                    <h2 className="text-xl font-bold mb-2 text-gray-300">Completion Rate</h2>
                    <div className="flex items-end space-x-2">
                        <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">{data.completionPercentage}%</span>
                        <span className="text-xl text-gray-400 mb-2">overall</span>
                    </div>
                </div>
            </div>

            <div className="card">
                <Trends data={data.trends} />
            </div>

            <div className="card">
                <CompareMode comparison={data.comparison} />
            </div>
        </div>
    );
};

export default Reports;
