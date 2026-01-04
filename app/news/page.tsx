import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import SearchField from "../_components/SearchField";
import { NEWS_LIST_LIMIT } from "@/app/constants";
import NewsTabs from "../_components/NewsTabs";
import styles from "./page.module.css";

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <>
      <h2 className={styles.sectionTitle}>ALL</h2>
      <NewsTabs />
      <SearchField />
      <NewsList news={news} variant="grid" />
      <Pagination totalCount={totalCount} />
    </>
  );
}
