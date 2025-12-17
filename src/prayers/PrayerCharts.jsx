import { useEffect, useState } from 'react';
import { getPrayerStats } from '../services/prayerService';
import useStore from '../store/useStore';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const PrayerCharts = ({ period }) => {
    const { user } = useStore();
    const [data, setData] = useState([]);

    useEffect(() => {
        if (user) {
            const endDate = new Date();
            const startDate = new Date();
            if (period === 'weekly') {
                startDate.setDate(endDate.getDate() - 6);
            } else {
                startDate.setDate(endDate.getDate() - 29);
            }

            const startStr = startDate.toISOString().split('T')[0];
            const endStr = endDate.toISOString().split('T')[0];

            getPrayerStats(user.uid, startStr, endStr).then(stats => {
                const processed = stats.map(day => {
                    const count = Object.values(day).filter(v => v === true).length;
                    return { date: day.date, count };
                });
                setData(processed);
            });
        }
    }, [user, period]);

    return (
        <div className="card h-96">
            <h2 className="text-xl font-bold mb-4 text-emerald-300 capitalize flex items-center">
                {period} Overview
                <span className="ml-2 text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full border border-emerald-500/20">Analytics</span>
            </h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                    <XAxis
                        dataKey="date"
                        stroke="#9CA3AF"
                        tick={{ fontSize: 12 }}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="#9CA3AF"
                        allowDecimals={false}
                        domain={[0, 5]}
                        tick={{ fontSize: 12 }}
                        tickLine={false}
                        axisLine={false}
                    />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', color: '#fff', borderRadius: '0.5rem' }}
                        cursor={{ fill: '#374151', opacity: 0.4 }}
                    />
                    <Bar dataKey="count" fill="#10B981" radius={[4, 4, 0, 0]} animationDuration={1000} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PrayerCharts;
