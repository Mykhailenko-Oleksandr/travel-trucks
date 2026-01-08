"use client";

import Image from "next/image";
import css from "./TrucksItem.module.css";
import { Truck } from "@/types/truck";
import Link from "next/link";
import { useTruckLikeStore } from "@/lib/store/truckLikeStore";

interface TrucksItemProps {
  truck: Truck;
}

export default function TrucksItem({ truck }: TrucksItemProps) {
  const { trucksIds, setTruck, deleteTruck } = useTruckLikeStore();

  function handleClickLike() {
    if (trucksIds.includes(truck.id)) {
      deleteTruck(truck.id);
    } else {
      setTruck(truck.id);
    }
  }

  return (
    <li className={css.travelCard}>
      <Image
        className={css.image}
        src={truck.gallery[0].thumb || truck.gallery[0].original}
        alt={truck.name}
        width={292}
        height={320}
      />
      <div className={css.infoBox}>
        <div className={css.titleBox}>
          <h3 className={css.title}>{truck.name}</h3>
          <div className={css.priceBox}>
            <p className={css.price}>&euro;{truck.price.toFixed(2)}</p>
            <button
              className={css.like}
              aria-label="like truck"
              type="button"
              onClick={handleClickLike}
            >
              <svg
                className={`${css.likeIcon}  ${trucksIds.includes(truck.id) ? css.accent : ""}`}
                width={26}
                height={24}
              >
                <use href="/sprite.svg#icon-heart" />
              </svg>
            </button>
          </div>
        </div>
        <div className={css.ratingLocationBox}>
          <div className={css.ratingBox}>
            <svg className={css.ratingIcon} width={16} height={16}>
              <use href="/sprite.svg#icon-rating"></use>
            </svg>
            <p className={css.ratingText}>
              {truck.rating}({truck.reviews.length} Reviews)
            </p>
          </div>
          <div className={css.locationBox}>
            <svg className={css.locationIcon} width={16} height={16}>
              <use href="/sprite.svg#icon-map"></use>
            </svg>
            <p className={css.locationText}>{truck.location}</p>
          </div>
        </div>
        <p className={css.description}>{truck.description}</p>
        <div className={css.categoriesTruck}>
          {truck.transmission && (
            <div className={css.category}>
              <svg className={css.categoryIcon} width={20} height={20}>
                <use href="/sprite.svg#icon-diagram" />
              </svg>
              <p className={css.categoryText}>{truck.transmission}</p>
            </div>
          )}
          {truck.engine && (
            <div className={css.category}>
              <svg className={css.categoryIcon} width={20} height={20}>
                <use href="/sprite.svg#icon-fuel" />
              </svg>
              <p className={css.categoryText}>{truck.engine}</p>
            </div>
          )}
          {truck.kitchen && (
            <div className={css.category}>
              <svg className={css.categoryIcon} width={20} height={20}>
                <use href="/sprite.svg#icon-cup-hot" />
              </svg>
              <p className={css.categoryText}>Kitchen</p>
            </div>
          )}
          {truck.AC && (
            <div className={css.category}>
              <svg className={css.categoryIcon} width={20} height={20}>
                <use href="/sprite.svg#icon-wind" />
              </svg>
              <p className={css.categoryText}>AC</p>
            </div>
          )}
          {truck.radio && (
            <div className={css.category}>
              <svg className={css.categoryIcon} width={20} height={20}>
                <use href="/sprite.svg#icon-radios" />
              </svg>
              <p className={css.categoryText}>Radio</p>
            </div>
          )}
          {truck.bathroom && (
            <div className={css.category}>
              <svg className={css.categoryIcon} width={20} height={20}>
                <use href="/sprite.svg#icon-shower" />
              </svg>
              <p className={css.categoryText}>Bathroom</p>
            </div>
          )}
          {truck.refrigerator && (
            <div className={css.category}>
              <svg className={css.categoryIcon} width={20} height={20}>
                <use href="/sprite.svg#icon-fridge" />
              </svg>
              <p className={css.categoryText}>Refrigerator</p>
            </div>
          )}
          {truck.microwave && (
            <div className={css.category}>
              <svg className={css.categoryIconEmpty} width={20} height={20}>
                <use href="/sprite.svg#icon-microwave" />
              </svg>
              <p className={css.categoryText}>Microwave</p>
            </div>
          )}
          {truck.gas && (
            <div className={css.category}>
              <svg className={css.categoryIconEmpty} width={20} height={20}>
                <use href="/sprite.svg#icon-gas-stove" />
              </svg>
              <p className={css.categoryText}>Gas</p>
            </div>
          )}
          {truck.water && (
            <div className={css.category}>
              <svg className={css.categoryIconEmpty} width={20} height={20}>
                <use href="/sprite.svg#icon-water" />
              </svg>
              <p className={css.categoryText}>Water</p>
            </div>
          )}
        </div>
        <Link className={css.detailsBtn} href={`/catalog/${truck.id}`}>
          Show more
        </Link>
      </div>
    </li>
  );
}
