import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from "./constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import NavCard from "@/app/_components/NavCard";

export const revalidate = 60;

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
   <>
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
        <p className={styles.description}>私たちは市場をリードしているグローバルテックカンパニーです。</p>
      </div>
      <Image
        className={styles.bgimg}
        src="https://tools.arashichang.com/300"
        alt=""
        width={4000}
        height={1200}
      />
    </section>

    <section>
      <div className={styles.navCards}>
        <NavCard href="/news" title='ニュース' description="最新の記事・お知らせ"/>
        <NavCard href="/profile" title='プロフィール' description="経歴・趣味」"/>
        <NavCard href="/contact" title='お問い合わせ' description="ご連絡はこちら"/>
      </div>
    </section>
    
    <section className={styles.news}>
      <h2 className={styles.newsTitle}>News</h2>
      <NewsList news={data.contents} />
      <div className={styles.newsLink}>
        <ButtonLink href="/news">もっとみる</ButtonLink>
      </div>
    </section>
   </>
  );
}