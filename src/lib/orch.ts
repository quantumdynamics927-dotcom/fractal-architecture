import { create } from "zustand";

type OrchState = {
  windowMs: number;
  setWindowMs: (n: number) => void;
};

export const useOrch = create<OrchState>((set) => ({
  windowMs: 150,
  setWindowMs: (windowMs) => set({ windowMs: Math.min(200, Math.max(100, windowMs)) }),
}));
