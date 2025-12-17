const CompareMode = ({ comparison }) => {
    const diffColor = comparison.improved ? 'text-emerald-400' : 'text-red-400';
    const diffBg = comparison.improved ? 'bg-emerald-500/10' : 'bg-red-500/10';
    const arrow = comparison.improved ? '↑' : '↓';

    return (
        <div>
            <h2 className="text-xl font-bold mb-6 text-emerald-300">Compare Mode</h2>
            <div className="flex items-center justify-between">
                <div className="text-center md:text-left">
                    <p className="text-gray-400 text-sm uppercase tracking-wide">Previous Period</p>
                    <p className="text-3xl font-bold text-white mt-1">{comparison.prevPeriod}%</p>
                </div>

                <div className={`text-center px-6 py-3 rounded-xl ${diffBg}`}>
                    <p className="text-gray-400 text-xs uppercase tracking-wide text-center">Difference</p>
                    <p className={`text-4xl font-extrabold ${diffColor} mt-1 flex items-center justify-center`}>
                        <span className="text-2xl mr-1">{arrow}</span> {Math.abs(comparison.difference)}%
                    </p>
                </div>

                <div className="text-center md:text-right">
                    <p className="text-gray-400 text-sm uppercase tracking-wide">Current Period</p>
                    <p className="text-3xl font-bold text-white mt-1">{comparison.currentPeriod}%</p>
                </div>
            </div>
        </div>
    );
};

export default CompareMode;
