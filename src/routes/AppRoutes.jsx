import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../dashboard/Dashboard';
import GoalsList from '../goals/GoalsList';
import CreateGoal from '../goals/CreateGoal';
import EditGoal from '../goals/EditGoal';
import PrayerTabs from '../prayers/PrayerTabs';
import Reports from '../reports/Reports';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/goals" element={<GoalsList />} />
                <Route path="/goals/new" element={<CreateGoal />} />
                <Route path="/goals/edit/:id" element={<EditGoal />} />
                <Route path="/prayers" element={<PrayerTabs />} />
                <Route path="/reports" element={<Reports />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;
