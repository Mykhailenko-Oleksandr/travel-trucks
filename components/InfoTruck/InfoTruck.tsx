"use client";

import { Truck } from "@/types/truck";
import css from "./InfoTruck.module.css";
import FeaturesTruck from "../FeaturesTruck/FeaturesTruck";
import { useState } from "react";
import ReviewsTruck from "../ReviewsTruck/ReviewsTruck";
import FormBooking from "../FormBooking/FormBooking";

interface InfoTruckProps {
  truck: Truck;
}

export default function InfoTruck({ truck }: InfoTruckProps) {
  const [infoOpen, setInfoOpen] = useState<"feature" | "reviews">("feature");

  return (
    <>
      <div className={css.btnBox}>
        <button
          className={`${css.btnInfo} ${infoOpen === "feature" ? css.accentBtn : ""}`}
          type="button"
          onClick={() => setInfoOpen("feature")}
        >
          <span className={css.btnText}>Features</span>
        </button>
        <button
          className={`${css.btnInfo} ${infoOpen === "reviews" ? css.accentBtn : ""}`}
          type="button"
          onClick={() => setInfoOpen("reviews")}
        >
          <span className={css.btnText}>Reviews</span>
        </button>
      </div>
      <div className={css.infoBookingBox}>
        {infoOpen === "feature" && <FeaturesTruck truck={truck} />}
        {infoOpen === "reviews" && <ReviewsTruck reviews={truck.reviews} />}

        <FormBooking truck={truck} />
      </div>
    </>
  );
}
