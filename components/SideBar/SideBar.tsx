"use client";

import { FormDataFilter } from "@/types/truck";
import css from "./SideBar.module.css";
import { useTruckFilterStore } from "@/lib/store/truckFilterStore";
import { ChangeEvent, useEffect } from "react";

export default function SideBar() {
  const { truckFilter, setFilter } = useTruckFilterStore();

  useEffect(() => {
    const saved = localStorage.getItem("truckFilter");
    if (saved) {
      setFilter(JSON.parse(saved));
    }
  }, [setFilter]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);

    let value: string | null;

    if (e.target.type === "checkbox") {
      value = e.target.checked ? e.target.value : null;
    } else {
      value = e.target.value;
    }

    setFilter({ ...truckFilter, [e.target.name]: value });
  }

  function handleSubmit(formData: FormData) {
    const dataFilters: FormDataFilter = Object.fromEntries(formData);

    // setFilter(dataFilters);
    localStorage.setItem("truckFilter", JSON.stringify(dataFilters));
  }

  return (
    <form action={handleSubmit} className={css.sidebar}>
      <label htmlFor="location" className={css.cityLabel}>
        Location
        <div className={css.inputBox}>
          <input
            className={css.cityInput}
            type="text"
            id="location"
            name="location"
            placeholder="City"
            onChange={handleChange}
            defaultValue={truckFilter.location}
          />
          <svg className={css.inputIcon} width={20} height={20}>
            <use href="/sprite.svg#icon-map"></use>
          </svg>
        </div>
      </label>
      <p className={css.filterTitle}>Filters</p>
      <fieldset>
        <legend className={css.filterLabel}>Vehicle equipment</legend>
        <div className={css.vehicleFilterBox}>
          <label className={css.labelCheckbox}>
            <input
              type="checkbox"
              name="ac"
              value="true"
              onChange={handleChange}
              checked={truckFilter.ac === "true"}
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
              name="tv"
              value="true"
              onChange={handleChange}
              checked={truckFilter.tv === "true"}
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
              onChange={handleChange}
              checked={truckFilter.form === "panelTruck"}
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
              onChange={handleChange}
              checked={truckFilter.form === "fullyIntegrated"}
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
              onChange={handleChange}
              checked={truckFilter.form === "alcove"}
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
