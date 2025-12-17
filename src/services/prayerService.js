import { db } from './firebase';
import { doc, setDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';

const PRAYERS_COLLECTION = 'prayers';

export const logPrayer = async (userId, date, prayerName, status) => {
    // Path: /prayers/{uid}/days/{date}
    const dayRef = doc(db, PRAYERS_COLLECTION, userId, 'days', date);
    // We use setDoc with merge to update specific prayer
    await setDoc(dayRef, {
        [prayerName]: status // boolean or status string
    }, { merge: true });
};

export const getDailyPrayers = async (userId, date) => {
    const dayRef = doc(db, PRAYERS_COLLECTION, userId, 'days', date);
    const docSnap = await getDoc(dayRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return {};
    }
};

export const getPrayerStats = async (userId, startDate, endDate) => {
    const daysRef = collection(db, PRAYERS_COLLECTION, userId, 'days');
    // Note: Querying by document ID (__name__) works for range queries on strings (dates)
    const q = query(daysRef, where('__name__', '>=', startDate), where('__name__', '<=', endDate));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ date: doc.id, ...doc.data() }));
};
