import { useState, useEffect } from 'react';
import { updateGoal, subscribeToGoals } from '../services/goalService';
import useStore from '../store/useStore';
import { useNavigate, useParams } from 'react-router-dom';

const EditGoal = () => {
    const { user } = useStore();
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user && id) {
            const unsubscribe = subscribeToGoals(user.uid, (goals) => {
                const goal = goals.find(g => g.id === id);
                if (goal) {
                    setTitle(goal.title);
                    setDescription(goal.description);
                }
                setLoading(false);
            });
            return () => unsubscribe();
        }
    }, [user, id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) return;
        await updateGoal(id, { title, description });
        navigate('/goals');
    };

    if (loading) return <div className="min-h-screen text-white p-6 flex justify-center items-center">Loading...</div>;

    return (
        <div className="max-w-2xl mx-auto pt-8 animate-fade-in-up">
            <div className="card">
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6">Edit Goal</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="input-field"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="input-field h-32 resize-none"
                        />
                    </div>
                    <div className="flex space-x-4 pt-4">
                        <button type="button" onClick={() => navigate('/goals')} className="w-1/2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200">
                            Cancel
                        </button>
                        <button type="submit" className="w-1/2 btn-primary">
                            Update Goal
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditGoal;
