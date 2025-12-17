import { useState } from 'react';
import PrayerEntry from './PrayerEntry';
import PrayerCharts from './PrayerCharts';

const PrayerTabs = () => {
    const [activeTab, setActiveTab] = useState('daily');

    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Prayer Tracking</h1>
                    <p className="text-gray-400">Maintain your spiritual connection.</p>
                </div>
                <div className="flex bg-gray-800 p-1 rounded-lg mt-4 md:mt-0">
                    <button
                        className={`px-4 py-2 rounded-md font-bold transition-all duration-200 ${activeTab === 'daily' ? 'bg-emerald-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                        onClick={() => setActiveTab('daily')}
                    >
                        Daily
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md font-bold transition-all duration-200 ${activeTab === 'weekly' ? 'bg-emerald-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                        onClick={() => setActiveTab('weekly')}
                    >
                        Weekly
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md font-bold transition-all duration-200 ${activeTab === 'monthly' ? 'bg-emerald-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                        onClick={() => setActiveTab('monthly')}
                    >
                        Monthly
                    </button>
                </div>
            </div>

            {activeTab === 'daily' && <PrayerEntry />}
            {activeTab === 'weekly' && <PrayerCharts period="weekly" />}
            {activeTab === 'monthly' && <PrayerCharts period="monthly" />}
        </div>
    );
};

export default PrayerTabs;
