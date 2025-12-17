import { useState, useEffect } from 'react';
import { logPrayer, getDailyPrayers } from '../services/prayerService';
import useStore from '../store/useStore';

const PRAYERS = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

const PrayerEntry = () => {
    const { user } = useStore();
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [status, setStatus] = useState({});

    useEffect(() => {
        if (user) {
            getDailyPrayers(user.uid, date).then(data => setStatus(data));
        }
    }, [user, date]);

    const handleToggle = async (prayer) => {
        if (!user) return;
        const newStatus = !status[prayer];
        setStatus(prev => ({ ...prev, [prayer]: newStatus }));
        await logPrayer(user.uid, date, prayer, newStatus);
    };

    return (
        <div className="max-w-lg mx-auto">
            <div className="card">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-bold text-emerald-300">Log Prayers</h2>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="bg-gray-700 text-white p-2 rounded-lg border border-gray-600 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                </div>
                <div className="space-y-4">
                    {PRAYERS.map(prayer => (
                        <div key={prayer} className="flex justify-between items-center bg-gray-700/50 p-4 rounded-xl hover:bg-gray-700 transition border border-gray-600/50">
                            <span className="font-bold text-lg text-gray-200">{prayer}</span>
                            <button
                                onClick={() => handleToggle(prayer)}
                                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 transform ${status[prayer] ? 'bg-emerald-500 border-emerald-500 scale-110 shadow-lg shadow-emerald-500/50' : 'border-gray-500 hover:border-emerald-400 hover:scale-105'}`}
                            >
                                {status[prayer] && <span className="text-white font-bold">✓</span>}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PrayerEntry;
