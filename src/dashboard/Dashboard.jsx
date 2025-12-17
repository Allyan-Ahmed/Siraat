import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="space-y-8 animate-fade-in-up">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 space-y-4 md:space-y-0">
                <div>
                    <h1 className="text-4xl font-extrabold text-white mb-2">Welcome Back</h1>
                    <p className="text-gray-400">Track your progress and stay disciplined.</p>
                </div>
                <div className="text-right">
                    <p className="text-emerald-400 font-bold text-lg">Today is {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Link to="/goals" className="card group hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-emerald-300 group-hover:text-emerald-400 transition">Goals & Habits</h2>
                        <span className="text-4xl">🎯</span>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition">Manage your personal goals, track progress, and build consistency.</p>
                </Link>

                <Link to="/prayers" className="card group hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-emerald-300 group-hover:text-emerald-400 transition">Prayer Tracker</h2>
                        <span className="text-4xl">🕌</span>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition">Log your daily prayers and view your spiritual consistency.</p>
                </Link>

                <Link to="/reports" className="card group hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-emerald-300 group-hover:text-emerald-400 transition">Analytics</h2>
                        <span className="text-4xl">📊</span>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition">Visualize your performance trends and discipline scores.</p>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
