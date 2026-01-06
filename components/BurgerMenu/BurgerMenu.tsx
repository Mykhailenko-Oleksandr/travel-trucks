"use client";

import Link from "next/link";
import css from "./BurgerMenu.module.css";
import { usePathname } from "next/navigation";
import { MouseEvent, useEffect, useRef } from "react";

interface BurgerMenuProps {
  closeMenu: () => void;
  isOpen: boolean;
}

export default function BurgerMenu({ closeMenu, isOpen }: BurgerMenuProps) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  function handleClickBackdrop(e: MouseEvent<HTMLDivElement>) {
    if (e.target === menuRef.current) {
      closeMenu();
    }
  }

  useEffect(() => {
    if (!isOpen) return;

    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") closeMenu();
    }

    document.body.classList.toggle("no-scroll", isOpen);
    window.addEventListener("keydown", onEsc);

    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", onEsc);
    };
  }, [isOpen, closeMenu]);

  return (
    <div
      ref={menuRef}
      className={`${css.backdrop} ${isOpen ? css.modalIsOpen : ""}`}
      onClick={handleClickBackdrop}>
      <div className={`container ${css.mobileMenu} `}>
        <div className={css.mobileMenuTop}>
          <Link
            className={css.logo}
            href="/"
            aria-label="logotype">
            <svg
              className={css.logoIcon}
              width={136}
              height={16}>
              <use href="/sprite.svg#icon-logo" />
            </svg>
          </Link>

          <button
            className={css.menuCloseBtn}
            onClick={closeMenu}>
            <svg
              className={css.menuIcon}
              width="24"
              height="24">
              <use href="/sprite.svg#icon-close" />
            </svg>
          </button>
        </div>

        <nav className={css.navigationBox}>
          <Link
            className={`${css.navigationLink} ${pathname === "/" ? css.accent : ""}`}
            href="/">
            Home
          </Link>
          <Link
            className={`${css.navigationLink} ${pathname === "/catalog" ? css.accent : ""}`}
            href="/catalog">
            Catalog
          </Link>
        </nav>
      </div>
    </div>
  );
}
