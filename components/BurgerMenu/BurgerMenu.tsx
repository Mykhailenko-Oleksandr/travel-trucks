"use client";

import Link from "next/link";
import css from "./BurgerMenu.module.css";

interface BurgerMenuProps {
  closeMenu: () => void;
}

export default function BurgerMenu({ closeMenu }: BurgerMenuProps) {
  return (
    <div className={css.modalNavbar}>
      <div className={`container ${css.mobileMenu} `}>
        <div className={css.mobileMenuTop}>
          <Link className={css.logo} href="/" aria-label="logotype">
            <svg className={css.logoIcon} width={136} height={16}>
              <use href="/sprite.svg#icon-logo" />
            </svg>
          </Link>

          <button className={css.menuCloseBtn} onClick={closeMenu}>
            <svg className={css.menuIcon} width="24" height="24">
              <use href="/sprite.svg#icon-close" />
            </svg>
          </button>
        </div>

        <nav className={css.navigationBox}>
          <Link className={css.navigationLink} href="/">
            Home
          </Link>
          <Link className={css.navigationLink} href="/">
            Catalog
          </Link>
        </nav>
      </div>
    </div>
  );
}
