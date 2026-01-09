import { FormData } from "@/components/FormBooking/FormBooking";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type BookingDraftStore = {
  draft: FormData;
  setDraft: (booking: FormData) => void;
  clearDraft: () => void;
};

const initialDraft: FormData = {
  userName: "",
  email: "",
  date: null,
  comment: "",
};

export const useBookingDraftStore = create<BookingDraftStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (value) =>
        set((state) => ({ draft: { ...state.draft, ...value } })),
      clearDraft: () => set(() => ({ draft: initialDraft })),
    }),
    {
      name: "booking-draft",
      partialize: (state) => ({ draft: state.draft }),
    }
  )
);
