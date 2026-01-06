import Link from "next/link";
import css from "./Home.module.css";

export default function Home() {
  return (
    <section className={css.hero}>
      <div className="container">
        <h1 className={css.heroTitle}>Campers of your dreams</h1>
        <p className={css.heroText}>
          You can find everything you want in our catalog
        </p>
        <Link className={css.heroLink} href="/catalog">
          View Now
        </Link>
      </div>
    </section>
  );
}
