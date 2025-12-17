// import { functions } from './firebase';
// import { httpsCallable } from 'firebase/functions';

// eslint-disable-next-line no-unused-vars
export const getReports = async (userId, period) => {
    // In a real app:
    // const generateReport = httpsCallable(functions, 'generateReport');
    // const result = await generateReport({ userId, period });
    // return result.data;

    // Mocking for now as I can't deploy functions
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                completionPercentage: 75,
                disciplineScore: 8.5,
                trends: [
                    { date: '2023-10-01', score: 60 },
                    { date: '2023-10-02', score: 70 },
                    { date: '2023-10-03', score: 80 },
                    { date: '2023-10-04', score: 75 },
                    { date: '2023-10-05', score: 85 },
                ],
                comparison: {
                    prevPeriod: 70,
                    currentPeriod: 75,
                    difference: 5,
                    improved: true
                }
            });
        }, 500);
    });
};
