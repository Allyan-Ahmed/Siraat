import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const Trends = ({ data }) => {
    return (
        <div className="h-80">
            <h2 className="text-xl font-bold mb-4 text-emerald-300">Trends</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
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
                        tick={{ fontSize: 12 }}
                        tickLine={false}
                        axisLine={false}
                    />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', color: '#fff', borderRadius: '0.5rem' }}
                        cursor={{ stroke: '#10B981', strokeWidth: 1 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="score"
                        stroke="#10B981"
                        strokeWidth={3}
                        dot={{ r: 4, fill: '#10B981', stroke: '#064E3B', strokeWidth: 2 }}
                        activeDot={{ r: 6, fill: '#34D399' }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Trends;
