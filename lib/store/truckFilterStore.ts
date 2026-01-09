import { FormDataFilter } from "@/types/truck";
import { create } from "zustand";

type DraftStore = {
  truckFilter: FormDataFilter;
  setFilter: (value: FormDataFilter) => void;
  deleteFilter: () => void;
};

export const useTruckFilterStore = create<DraftStore>()((set) => ({
  truckFilter: {},
  setFilter: (value) =>
    set((state) => ({ truckFilter: { ...state.truckFilter, ...value } })),
  deleteFilter: () => set(() => ({ truckFilter: {} })),
}));
