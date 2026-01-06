"use client";

import css from "./SideBar.module.css";

export default function SideBar() {
  function handleChangeInput() {
    console.log("ok");
  }

  function handleClickBtnFilter() {}

  return (
    <div className={css.sidebar}>
      <label
        htmlFor="location"
        className={css.cityLabel}>
        Location
        <div className={css.inputBox}>
          <input
            className={css.cityInput}
            type="text"
            id="location"
            name="location"
            placeholder="City"
            onChange={handleChangeInput}
          />
          <svg
            className={css.inputIcon}
            width={20}
            height={20}>
            <use href="/sprite.svg#icon-map"></use>
          </svg>
        </div>
      </label>
      <p className={css.filterTitle}>Filters</p>
      <p className={css.filterLabel}>Vehicle equipment</p>
      <div className={css.vehicleFilterBox}>
        <button
          onClick={handleClickBtnFilter}
          type="button"
          className={css.filterBtn}>
          <svg
            className={css.iconBtn}
            width={32}
            height={32}>
            <use href="/sprite.svg#icon-wind"></use>
          </svg>
          AC
        </button>
        <button
          onClick={handleClickBtnFilter}
          type="button"
          className={css.filterBtn}>
          <svg
            className={css.iconBtn}
            width={32}
            height={32}>
            <use href="/sprite.svg#icon-diagram"></use>
          </svg>
          Automatic
        </button>
        <button
          onClick={handleClickBtnFilter}
          type="button"
          className={css.filterBtn}>
          <svg
            className={css.iconBtn}
            width={32}
            height={32}>
            <use href="/sprite.svg#icon-cup-hot"></use>
          </svg>
          Kitchen
        </button>
        <button
          onClick={handleClickBtnFilter}
          type="button"
          className={css.filterBtn}>
          <svg
            className={css.iconBtn}
            width={32}
            height={32}>
            <use href="/sprite.svg#icon-tv"></use>
          </svg>
          TV
        </button>
        <button
          onClick={handleClickBtnFilter}
          type="button"
          className={css.filterBtn}>
          <svg
            className={css.iconBtn}
            width={32}
            height={32}>
            <use href="/sprite.svg#icon-shower"></use>
          </svg>
          Bathroom
        </button>
      </div>
      <p className={css.filterLabel}>Vehicle type</p>
      <div className={css.vehicleFilterBox}>
        <button
          onClick={handleClickBtnFilter}
          type="button"
          className={css.filterBtn}>
          <svg
            className={css.iconBtn}
            width={32}
            height={32}>
            <use href="/sprite.svg#icon-grid-2"></use>
          </svg>
          Van
        </button>
        <button
          onClick={handleClickBtnFilter}
          type="button"
          className={css.filterBtn}>
          <svg
            className={css.iconBtn}
            width={32}
            height={32}>
            <use href="/sprite.svg#icon-grid"></use>
          </svg>
          Fully Integrated
        </button>
        <button
          onClick={handleClickBtnFilter}
          type="button"
          className={css.filterBtn}>
          <svg
            className={css.iconBtn}
            width={32}
            height={32}>
            <use href="/sprite.svg#icon-grid-3"></use>
          </svg>
          Alcove
        </button>
      </div>
      <button
        type="submit"
        className={css.formBtn}>
        Search
      </button>
    </div>
  );
}
