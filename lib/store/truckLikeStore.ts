import { create } from "zustand";
import { persist } from "zustand/middleware";

type DraftStore = {
  trucksIds: string[];
  setTruck: (id: string) => void;
  deleteTruck: (id: string) => void;
};

export const useTruckLikeStore = create<DraftStore>()(
  persist(
    (set) => ({
      trucksIds: [],
      setTruck: (id) =>
        set((state) => ({ trucksIds: [...state.trucksIds, id] })),
      deleteTruck: (id) =>
        set((state) => ({
          trucksIds: state.trucksIds.filter((truckId) => truckId !== id),
        })),
    }),
    {
      name: "trucksLike",
      partialize: (state) => ({ trucksIds: state.trucksIds }),
    }
  )
);
