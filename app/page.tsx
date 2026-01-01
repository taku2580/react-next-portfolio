import styles from "./page.module.css";
import Image from "next/image";
import NavCard from "@/app/_components/NavCard";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "./constants";

export const revalidate = 60;

export default async function Home() {
  const newsData = await getNewsList({ limit: TOP_NEWS_LIMIT });

  return (
    <main className={styles.main}>
      <section className={styles.hero} aria-label="ヒーロー">
        <Image
          className={styles.bgImage}
          src="/pexels-pixabay-164175.jpg"
          alt=""
          fill
          priority
          quality={90}
        />

        <div className={styles.heroInner}>
          <h1 className={styles.title}>Welcome to My Portfolio</h1>
          <p className={styles.subtitle}>
            Design / Frontend / Minimal Motion
          </p>

          <div className={styles.scrollHint} aria-hidden="true">
            <span className={styles.scrollText}>Scroll</span>
            <span className={styles.scrollLine} />
          </div>
        </div>
      </section>

      <section className={styles.newsSection} aria-label="最新ニュース">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>News</h2>
          <div className={styles.sectionActions}>
            <ButtonLink href="/news">もっと見る</ButtonLink>
          </div>
        </div>

        <div className={styles.newsBody}>
          <NewsList news={newsData.contents} />
        </div>
      </section>

      <section className={styles.navSection} aria-label="コンテンツ一覧">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Contents</h2>
        </div>

        <div className={styles.sectionBody}>
          <div className={styles.cardGrid}>
            <NavCard
              href="/profile"
              title="Profile"
              description="自己紹介 / スキル / 経歴をまとめています"
              hoverTitle="プロフィール"
            />
            <NavCard
              href="/news"
              title="News"
              description="制作ログ / 記事 / 作品の更新をまとめています"
              hoverTitle="ブログ・作品"
            />
            <NavCard
              href="/contact"
              title="Contact"
              description="お仕事のご相談・ご連絡はこちらから"
              hoverTitle='お問い合わせ'
            />
          </div>
        </div>
      </section>
    </main>
  );
}
