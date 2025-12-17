import { Navigate, Outlet } from 'react-router-dom';
import useStore from '../store/useStore';
import Navbar from '../components/Navbar';

const ProtectedRoute = () => {
    const { user, loading } = useStore();

    if (loading) return <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Loading...</div>;
    if (!user) return <Navigate to="/login" replace />;

    return (
        <div className="min-h-screen bg-transparent">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>
        </div>
    );
};

export default ProtectedRoute;
