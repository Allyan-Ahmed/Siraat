import { useState } from 'react';
import { addGoal } from '../services/goalService';
import useStore from '../store/useStore';
import { useNavigate } from 'react-router-dom';

const CreateGoal = () => {
    const { user } = useStore();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) return;
        await addGoal(user.uid, { title, description });
        navigate('/goals');
    };

    return (
        <div className="max-w-2xl mx-auto pt-8 animate-fade-in-up">
            <div className="card">
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6">Create New Goal</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="input-field"
                            placeholder="e.g. Read Quran Daily"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="input-field h-32 resize-none"
                            placeholder="Describe your goal..."
                        />
                    </div>
                    <div className="flex space-x-4 pt-4">
                        <button type="button" onClick={() => navigate('/goals')} className="w-1/2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200">
                            Cancel
                        </button>
                        <button type="submit" className="w-1/2 btn-primary">
                            Save Goal
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateGoal;
