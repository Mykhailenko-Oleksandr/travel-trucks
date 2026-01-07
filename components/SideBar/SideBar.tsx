"use client";

import css from "./SideBar.module.css";

export default function SideBar() {
  function handleSubmit(formData: FormData) {
    const location = formData.get("location");
    const ac = formData.get("ac");
    console.log("location", location);
    console.log("ac", ac);
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
