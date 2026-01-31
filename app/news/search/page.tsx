import { getNewsList } from "@/app/_libs/microcms";
import { NEWS_LIST_LIMIT } from "@/app/constants";
import NewsList from "@/app/_components/NewsList";
import SearchField from "@/app/_components/SearchField";
import NewsTabs from "@/app/_components/NewsTabs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "検索結果",
};

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q: searchParams.q,
  });

  return (
    <>
      <NewsTabs />
      <SearchField />
      <NewsList news={news} variant="grid" />
    </>
  );
}
