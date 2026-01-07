import { FormDataFilter } from "@/types/truck";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type DraftStore = {
  truckFilter: FormDataFilter;
  setFilter: (value: FormDataFilter) => void;
  deleteFilter: () => void;
};

export const useTruckFilterStore = create<DraftStore>()(
  persist(
    (set) => ({
      truckFilter: {},
      setFilter: (value) => set(() => ({ truckFilter: value })),
      deleteFilter: () =>
        set(() => ({
          truckFilter: {},
        })),
    }),
    {
      name: "truckFilter",
      partialize: (state) => ({ truckFilter: state.truckFilter }),
    }
  )
);
