"use client";

import { Truck } from "@/types/truck";
import css from "./FeaturesTruck.module.css";

interface FeaturesTruckProps {
  truck: Truck;
}

export default function FeaturesTruck({ truck }: FeaturesTruckProps) {
  return (
    <div className={css.featuresContainer}>
      <div className={css.badgesBox}>
        {truck.transmission && (
          <div className={css.badge}>
            <svg className={css.badgeIcon} width={20} height={20}>
              <use href="/sprite.svg#icon-diagram" />
            </svg>
            <p className={css.badgeText}>{truck.transmission}</p>
          </div>
        )}
        {truck.engine && (
          <div className={css.badge}>
            <svg className={css.badgeIcon} width={20} height={20}>
              <use href="/sprite.svg#icon-fuel" />
            </svg>
            <p className={css.badgeText}>{truck.engine}</p>
          </div>
        )}
        {truck.kitchen && (
          <div className={css.badge}>
            <svg className={css.badgeIcon} width={20} height={20}>
              <use href="/sprite.svg#icon-cup-hot" />
            </svg>
            <p className={css.badgeText}>Kitchen</p>
          </div>
        )}
        {truck.AC && (
          <div className={css.badge}>
            <svg className={css.badgeIcon} width={20} height={20}>
              <use href="/sprite.svg#icon-wind" />
            </svg>
            <p className={css.badgeText}>AC</p>
          </div>
        )}
        {truck.radio && (
          <div className={css.badge}>
            <svg className={css.badgeIcon} width={20} height={20}>
              <use href="/sprite.svg#icon-radios" />
            </svg>
            <p className={css.badgeText}>Radio</p>
          </div>
        )}
        {truck.bathroom && (
          <div className={css.badge}>
            <svg className={css.badgeIcon} width={20} height={20}>
              <use href="/sprite.svg#icon-shower" />
            </svg>
            <p className={css.badgeText}>Bathroom</p>
          </div>
        )}
        {truck.refrigerator && (
          <div className={css.badge}>
            <svg className={css.badgeIcon} width={20} height={20}>
              <use href="/sprite.svg#icon-fridge" />
            </svg>
            <p className={css.badgeText}>Refrigerator</p>
          </div>
        )}
        {truck.microwave && (
          <div className={css.badge}>
            <svg className={css.badgeIconEmpty} width={20} height={20}>
              <use href="/sprite.svg#icon-microwave" />
            </svg>
            <p className={css.badgeText}>Microwave</p>
          </div>
        )}
        {truck.gas && (
          <div className={css.badge}>
            <svg className={css.badgeIconEmpty} width={20} height={20}>
              <use href="/sprite.svg#icon-gas-stove" />
            </svg>
            <p className={css.badgeText}>Gas</p>
          </div>
        )}
        {truck.water && (
          <div className={css.badge}>
            <svg className={css.badgeIconEmpty} width={20} height={20}>
              <use href="/sprite.svg#icon-water" />
            </svg>
            <p className={css.badgeText}>Water</p>
          </div>
        )}
      </div>
      <div className={css.detailsBox}>
        <h3 className={css.detailsTitle}>Vehicle details</h3>
        <div className={css.detailsValueBox}>
          <div className={css.detailsValue}>
            <p className={css.detailsText}>Form</p>
            <p className={css.detailsText}>
              {truck.form.charAt(0).toUpperCase() + truck.form.slice(1)}
            </p>
          </div>
          <div className={css.detailsValue}>
            <p className={css.detailsText}>Length</p>
            <p className={css.detailsText}>{parseFloat(truck.length)} m</p>
          </div>
          <div className={css.detailsValue}>
            <p className={css.detailsText}>Width</p>
            <p className={css.detailsText}>{parseFloat(truck.width)} m</p>
          </div>
          <div className={css.detailsValue}>
            <p className={css.detailsText}>Height</p>
            <p className={css.detailsText}>{parseFloat(truck.height)} m</p>
          </div>
          <div className={css.detailsValue}>
            <p className={css.detailsText}>Tank</p>
            <p className={css.detailsText}>{parseFloat(truck.tank)} l</p>
          </div>
          <div className={css.detailsValue}>
            <p className={css.detailsText}>Consumption</p>
            <p className={css.detailsText}>{truck.consumption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
