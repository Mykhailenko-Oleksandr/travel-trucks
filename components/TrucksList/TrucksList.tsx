"use client";

import { Truck } from "@/types/truck";
import css from "./TrucksList.module.css";
import TrucksItem from "../TrucksItem/TrucksItem";

interface TrucksListProps {
  trucks: Truck[];
  hasNextPage: boolean;
  onClickBtn: () => void;
  loading: boolean;
}

export default function TrucksList({
  trucks,
  hasNextPage,
  onClickBtn,
  loading,
}: TrucksListProps) {
  return (
    <div className={css.truckListBox}>
      <ul className={css.truckList}>
        {trucks.map((truck) => (
          <TrucksItem
            truck={truck}
            key={truck.id}
          />
        ))}
      </ul>
      {hasNextPage && (
        <button
          className={css.LoadMoreBtn}
          type="button"
          onClick={onClickBtn}
          disabled={loading}>
          Load more
        </button>
      )}
    </div>
  );
}
