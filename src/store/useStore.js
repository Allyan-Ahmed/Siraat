import { create } from 'zustand';

const useStore = create((set) => ({
    user: null,
    loading: true,
    setUser: (user) => set({ user, loading: false }),
}));

export default useStore;
