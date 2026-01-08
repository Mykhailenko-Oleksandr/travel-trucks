"use client";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import css from "./StarsRating.module.css";

interface StarsRatingProps {
  rating: number;
}

const CustomStar = (
  <path d="M14.182 1.636a1.067 1.067 0 0 1 1.887 0l4.028 7.635c.154.293.436.497.762.553l8.506 1.472a1.066 1.066 0 0 1 .583 1.794l-6.017 6.19c-.23.237-.338.568-.291.895l1.229 8.544a1.066 1.066 0 0 1-1.526 1.109l-7.747-3.809a1.066 1.066 0 0 0-.941 0l-7.747 3.809a1.066 1.066 0 0 1-1.526-1.109l1.229-8.544a1.065 1.065 0 0 0-.291-.895L.304 13.09a1.066 1.066 0 0 1 .583-1.794l8.506-1.472c.326-.056.607-.261.762-.553l4.028-7.635z" />
);

const myStyles = {
  itemShapes: CustomStar,
  itemStrokeWidth: 0,

  activeFillColor: "var(--rating)",
  //   activeStrokeColor: "var(--color-scheme-1-text)",

  inactiveFillColor: "var(--badges)",
  //   inactiveStrokeColor: "var(--color-scheme-1-text)",
};

export default function StarsRating({ rating }: StarsRatingProps) {
  return (
    <Rating
      className={css.ratingBox}
      value={rating}
      itemStyles={myStyles}
      readOnly
      items={5}
    />
  );
}
