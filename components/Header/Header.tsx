"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <Link className={css.logo} href="/" aria-label="logotype">
          <svg className={css.logoIcon} width={136} height={16}>
            <use href="/sprite.svg#icon-logo" />
          </svg>
        </Link>

        <button className={css.menuBtn} onClick={() => setMenuOpen(true)}>
          <svg className={css.menuIcon} width="24" height="24">
            <use href="/sprite.svg#icon-menu" />
          </svg>
        </button>

        {isMenuOpen && <BurgerMenu closeMenu={() => setMenuOpen(false)} />}

        <nav className={css.navigationBox}>
          <Link className={css.navigationLink} href="/">
            Home
          </Link>
          <Link className={css.navigationLink} href="/">
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}
