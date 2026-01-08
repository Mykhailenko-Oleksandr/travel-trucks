"use client";

import { Review } from "@/types/review";
import css from "./ReviewsTruck.module.css";
import StarsRating from "../StarsRating/StarsRating";

interface ReviewsTruckProps {
  reviews: Review[];
}

export default function ReviewsTruck({ reviews }: ReviewsTruckProps) {
  return (
    <ul className={css.reviewsList}>
      {reviews.length > 0 &&
        reviews.map((review) => (
          <li className={css.reviewItem} key={review.reviewer_name}>
            <div className={css.titleBox}>
              <div className={css.img}>
                {review.reviewer_name.charAt(0).toUpperCase()}
              </div>
              <div className={css.nameRatingBox}>
                <h4 className={css.name}>{review.reviewer_name}</h4>
                <StarsRating rating={review.reviewer_rating} />
              </div>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </li>
        ))}
    </ul>
  );
}
