import { FormDataFilter } from "@/types/truck";
import { create } from "zustand";

type DraftStore = {
  truckFilter: FormDataFilter;
  setFilter: (value: FormDataFilter) => void;
  deleteFilter: () => void;
};

const savedFilter =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("truckFilter") || "{}")
    : {};

export const useTruckFilterStore = create<DraftStore>()((set) => ({
  truckFilter: savedFilter,
  setFilter: (value) =>
    set((state) => ({ truckFilter: { ...state.truckFilter, ...value } })),
  deleteFilter: () =>
    set(() => ({
      truckFilter: {},
    })),
}));
