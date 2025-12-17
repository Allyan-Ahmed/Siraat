import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await auth.signOut();
        navigate('/login');
    };

    return (
        <nav className="bg-gray-800/80 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 hover:opacity-80 transition">
                            SIRAAT
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/goals" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Goals</Link>
                        <Link to="/prayers" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Prayers</Link>
                        <Link to="/reports" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition">Reports</Link>
                        <button
                            onClick={handleLogout}
                            className="ml-4 bg-red-500/10 hover:bg-red-500/20 text-red-500 hover:text-red-400 px-4 py-2 rounded-lg text-sm font-bold transition border border-red-500/20"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
