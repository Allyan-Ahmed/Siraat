import { db } from './firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc, query, where, onSnapshot, serverTimestamp } from 'firebase/firestore';

const GOALS_COLLECTION = 'goals';
const LOGS_COLLECTION = 'goalLogs';

export const addGoal = async (userId, goalData) => {
    return await addDoc(collection(db, GOALS_COLLECTION), {
        ...goalData,
        userId,
        createdAt: serverTimestamp()
    });
};

export const subscribeToGoals = (userId, callback) => {
    const q = query(collection(db, GOALS_COLLECTION), where("userId", "==", userId));
    return onSnapshot(q, (snapshot) => {
        const goals = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        callback(goals);
    });
};

export const updateGoal = async (goalId, data) => {
    const goalRef = doc(db, GOALS_COLLECTION, goalId);
    await updateDoc(goalRef, data);
};

export const deleteGoal = async (goalId) => {
    const goalRef = doc(db, GOALS_COLLECTION, goalId);
    await deleteDoc(goalRef);
};

export const logGoal = async (userId, goalId, status, date) => {
    return await addDoc(collection(db, LOGS_COLLECTION), {
        userId,
        goalId,
        status,
        date,
        timestamp: serverTimestamp()
    });
};
