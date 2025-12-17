import { useEffect, useState } from 'react';
import { subscribeToGoals, deleteGoal } from '../services/goalService';
import useStore from '../store/useStore';
import { Link } from 'react-router-dom';

const GoalsList = () => {
    const { user } = useStore();
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        if (user) {
            const unsubscribe = subscribeToGoals(user.uid, setGoals);
            return () => unsubscribe();
        }
    }, [user]);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this goal?')) {
            await deleteGoal(id);
        }
    };

    return (
        <div className="animate-fade-in-up">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">My Goals</h1>
                    <p className="text-gray-400">Focus on what matters.</p>
                </div>
                <Link to="/goals/new" className="btn-primary">
                    + New Goal
                </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {goals.map(goal => (
                    <div key={goal.id} className="card group relative">
                        <h3 className="text-xl font-bold mb-2 text-emerald-300 group-hover:text-emerald-400 transition">{goal.title}</h3>
                        <p className="text-gray-400 mb-6">{goal.description}</p>
                        <div className="absolute bottom-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Link to={`/goals/edit/${goal.id}`} className="text-blue-400 hover:text-blue-300 font-medium text-sm">Edit</Link>
                            <button onClick={() => handleDelete(goal.id)} className="text-red-400 hover:text-red-300 font-medium text-sm">Delete</button>
                        </div>
                    </div>
                ))}
                {goals.length === 0 && (
                    <div className="col-span-full text-center py-12 bg-gray-800/30 rounded-xl border-dashed border-2 border-gray-700">
                        <p className="text-gray-500 text-lg mb-4">No goals found.</p>
                        <Link to="/goals/new" className="text-emerald-400 hover:underline">Start by creating one!</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GoalsList;
