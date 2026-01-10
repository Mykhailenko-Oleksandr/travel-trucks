"use client";

import css from "./TruckById.module.css";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getTruckById } from "@/lib/api/clientApi";
import Loader from "@/components/Loader/Loader";
import { useState } from "react";
import FormBooking from "@/components/FormBooking/FormBooking";
import ReviewsTruck from "@/components/ReviewsTruck/ReviewsTruck";
import FeaturesTruck from "@/components/FeaturesTruck/FeaturesTruck";

export default function TruckByIdClient() {
  const [infoOpen, setInfoOpen] = useState<"feature" | "reviews">("feature");
  const { id } = useParams<{ id: string }>();

  const { data: truck, isLoading } = useQuery({
    queryKey: ["truck", id],
    queryFn: () => getTruckById(id),
    refetchOnMount: false,
  });

  return (
    <section className={css.truck}>
      <div className="container">
        {isLoading && <Loader />}

        {truck && (
          <>
            <h2 className={css.title}>{truck.name}</h2>
            <div className={css.ratingLocationBox}>
              <div className={css.ratingBox}>
                <svg
                  className={css.ratingIcon}
                  width={16}
                  height={16}>
                  <use href="/sprite.svg#icon-rating"></use>
                </svg>
                <p className={css.ratingText}>
                  {truck.rating}({truck.reviews.length} Reviews)
                </p>
              </div>
              <div className={css.locationBox}>
                <svg
                  className={css.locationIcon}
                  width={16}
                  height={16}>
                  <use href="/sprite.svg#icon-map"></use>
                </svg>
                <p className={css.locationText}>{truck.location}</p>
              </div>
            </div>
            <p className={css.price}>&euro;{truck.price.toFixed(2)}</p>
            <div className={css.imagesBox}>
              {truck.gallery.length > 0 &&
                truck.gallery.map((image) => (
                  <div
                    key={image.thumb}
                    className={css.imgBox}>
                    <Image
                      src={image.thumb}
                      alt="Image truck"
                      width={292}
                      height={312}
                      className={css.truckImg}
                    />
                  </div>
                ))}
            </div>
            <p className={css.description}>{truck.description}</p>
            <div className={css.btnBox}>
              <button
                className={`${css.btnInfo} ${infoOpen === "feature" ? css.accentBtn : ""}`}
                type="button"
                onClick={() => setInfoOpen("feature")}>
                <span className={css.btnText}>Features</span>
              </button>
              <button
                className={`${css.btnInfo} ${infoOpen === "reviews" ? css.accentBtn : ""}`}
                type="button"
                onClick={() => setInfoOpen("reviews")}>
                <span className={css.btnText}>Reviews</span>
              </button>
            </div>
            <div className={css.infoBookingBox}>
              {infoOpen === "feature" && <FeaturesTruck truck={truck} />}
              {infoOpen === "reviews" && (
                <ReviewsTruck reviews={truck.reviews} />
              )}

              <FormBooking truck={truck} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
