import { create } from "zustand";

type CountStateProps = {
  count: number;
  increment: () => void;
  decrement: () => void;
};
export const useCountStore = create<CountStateProps>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
