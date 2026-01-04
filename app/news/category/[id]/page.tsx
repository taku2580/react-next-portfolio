import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import Category from "@/app/_components/Category";
import { NEWS_LIST_LIMIT } from "@/app/constants";
import NewsTabs from "@/app/_components/NewsTabs";
import SearchField from "@/app/_components/SearchField";
import styles from "../../page.module.css";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const category = await getCategoryDetail(params.id).catch(notFound);

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });

  return (
    <>
      <h2 className={styles.sectionTitle}>
        {category.name} の一覧
      </h2>
      <NewsTabs />
      <SearchField />
      <NewsList news={news} variant="grid" />
      <Pagination
        totalCount={totalCount}
        basePath={`/news/category/${category.id}/p/`}
      />
    </>
  );
}
