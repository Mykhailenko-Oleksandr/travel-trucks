import Link from "next/link";
import css from "./Header.module.css";

export default async function Header() {
  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <Link className={css.logo} href="/" aria-label="logotype">
          <svg className={css.logoIcon} width={136} height={16}>
            <use href="/sprite.svg#icon-logo" />
          </svg>
        </Link>

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
