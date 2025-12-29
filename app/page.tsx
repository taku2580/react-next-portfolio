import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "./constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import NavCard from "@/app/_components/NavCard";
import HoverSwapLink from "./_components/HoverSwapLink";

export const revalidate = 60;

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
      </div>
      <div className={styles.navigation}>
        <nav className={styles.nav}>
          <HoverSwapLink
            href="/profile"
            label="Profile"
            hoverLavel="プロフィール"
            className={styles.navLink}
          />
          <HoverSwapLink
            href="/news"
            label="News"
            hoverLavel="ブログ・作品"
            className={styles.navLink}
          />
          <HoverSwapLink
            href="/contact"
            label="Contact"
            hoverLavel="お問い合わせ"
            className={styles.navLink}
          />
        </nav>
      </div>
      <Image
        className={styles.bgImage}
        src="/pexels-pixabay-164175.jpg"
        alt=""
        fill
        priority
        quality={90}
      />
    </main>
  );
}
