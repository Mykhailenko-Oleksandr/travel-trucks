"use client";

import { FormDataFilter } from "@/types/truck";
import css from "./SideBar.module.css";
import { useTruckFilterStore } from "@/lib/store/truckFilterStore";
import { ChangeEvent, FormEvent, MouseEvent, useEffect } from "react";

interface SideBarProps {
  saveFilter: (value: FormDataFilter) => void;
  onClosed: () => void;
}

export default function SideBar({ saveFilter, onClosed }: SideBarProps) {
  const { truckFilter, setFilter } = useTruckFilterStore();

  useEffect(() => {
    const saved = localStorage.getItem("truckFilter");
    if (saved) {
      setFilter(JSON.parse(saved));
    }
  }, [setFilter]);

  function handleRadioClick(e: MouseEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    const key = name as keyof FormDataFilter;

    if (truckFilter[key] === value) {
      setFilter({ [key]: undefined });
    } else {
      setFilter({ [key]: value });
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { type, name, value, checked } = e.currentTarget;

    if (type === "checkbox") {
      setFilter({ [name]: checked ? value : undefined });
      return;
    }

    setFilter({ [name]: value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const dataFilters: FormDataFilter = Object.fromEntries(formData);

    localStorage.setItem("truckFilter", JSON.stringify(dataFilters));

    saveFilter(dataFilters);
    onClosed();
  }

  return (
    <form onSubmit={handleSubmit} className={css.sidebar}>
      <label htmlFor="location" className={css.cityLabel}>
        Location
      </label>
      <div className={css.inputCityBox}>
        <input
          className={css.cityInput}
          type="text"
          id="location"
          name="location"
          placeholder="City"
          onChange={handleChange}
          value={truckFilter.location ?? ""}
        />
        <svg className={css.inputIcon} width={20} height={20}>
          <use href="/sprite.svg#icon-map"></use>
        </svg>
      </div>

      <p className={css.filterTitle}>Filters</p>

      <fieldset>
        <legend className={css.filterLabel}>Vehicle equipment</legend>
        <div className={css.vehicleFilterBox}>
          <label className={css.labelCheckbox}>
            <input
              type="checkbox"
              name="AC"
              value="true"
              onChange={handleChange}
              checked={truckFilter.AC === "true"}
              className={css.checkbox}
            />
            <span className={css.filterBtn}>
              <svg className={css.iconBtn} width={32} height={32}>
                <use href="/sprite.svg#icon-wind"></use>
              </svg>
              AC
            </span>
          </label>

          <label className={css.labelCheckbox}>
            <input
              type="checkbox"
              name="transmission"
              value="automatic"
              onChange={handleChange}
              checked={truckFilter.transmission === "automatic"}
              className={css.checkbox}
            />
            <span className={css.filterBtn}>
              <svg className={css.iconBtn} width={32} height={32}>
                <use href="/sprite.svg#icon-diagram"></use>
              </svg>
              Automatic
            </span>
          </label>

          <label className={css.labelCheckbox}>
            <input
              type="checkbox"
              name="kitchen"
              value="true"
              onChange={handleChange}
              checked={truckFilter.kitchen === "true"}
              className={css.checkbox}
            />
            <span className={css.filterBtn}>
              <svg className={css.iconBtn} width={32} height={32}>
                <use href="/sprite.svg#icon-cup-hot"></use>
              </svg>
              Kitchen
            </span>
          </label>

          <label className={css.labelCheckbox}>
            <input
              type="checkbox"
              name="TV"
              value="true"
              onChange={handleChange}
              checked={truckFilter.TV === "true"}
              className={css.checkbox}
            />
            <span className={css.filterBtn}>
              <svg className={css.iconBtn} width={32} height={32}>
                <use href="/sprite.svg#icon-tv"></use>
              </svg>
              TV
            </span>
          </label>

          <label className={css.labelCheckbox}>
            <input
              type="checkbox"
              name="bathroom"
              value="true"
              onChange={handleChange}
              checked={truckFilter.bathroom === "true"}
              className={css.checkbox}
            />
            <span className={css.filterBtn}>
              <svg className={css.iconBtn} width={32} height={32}>
                <use href="/sprite.svg#icon-shower"></use>
              </svg>
              Bathroom
            </span>
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend className={css.filterLabel}>Vehicle type</legend>
        <div className={css.vehicleFilterBox}>
          <label className={css.labelCheckbox}>
            <input
              type="radio"
              name="form"
              value="panelTruck"
              onClick={handleRadioClick}
              checked={truckFilter.form === "panelTruck"}
              onChange={() => {}}
              className={css.checkbox}
            />
            <span className={css.filterBtn}>
              <svg className={css.iconBtn} width={32} height={32}>
                <use href="/sprite.svg#icon-grid-2"></use>
              </svg>
              Van
            </span>
          </label>

          <label className={css.labelCheckbox}>
            <input
              type="radio"
              name="form"
              value="fullyIntegrated"
              onClick={handleRadioClick}
              checked={truckFilter.form === "fullyIntegrated"}
              onChange={() => {}}
              className={css.checkbox}
            />
            <span className={css.filterBtn}>
              <svg className={css.iconBtn} width={32} height={32}>
                <use href="/sprite.svg#icon-grid"></use>
              </svg>
              Fully Integrated
            </span>
          </label>

          <label className={css.labelCheckbox}>
            <input
              type="radio"
              name="form"
              value="alcove"
              onClick={handleRadioClick}
              checked={truckFilter.form === "alcove"}
              onChange={() => {}}
              className={css.checkbox}
            />
            <span className={css.filterBtn}>
              <svg className={css.iconBtn} width={32} height={32}>
                <use href="/sprite.svg#icon-grid-3"></use>
              </svg>
              Alcove
            </span>
          </label>
        </div>

        <button type="submit" className={css.formBtn}>
          Search
        </button>
      </fieldset>
    </form>
  );
}
