import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type TextItem = {
  fieldId: "TextItem";
  item: string;
  logo?: MicroCMSImage; // 学習中の言語ロゴ（studying用）
};

export type Profile = {
  bio: string;
  hobbies?: TextItem[];
  studying?: TextItem[];
  certifications?: TextItem[];
} & MicroCMSListContent;

export type Category = {
  name: string;
} & MicroCMSListContent;

export type News = {
  title: string;
  description: string;
  content: string;
  thumbnail: MicroCMSImage;
  category: Category;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getProfileList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Profile>({
    endpoint: "profile",
    queries,
    customRequestInit: {
      cache: queries?.draftKey === undefined ? "force-cache" : "no-store",
      next: {
        revalidate: queries?.draftKey === undefined ? 60 : 0,
      },
    },
  });
  return listData;
};

export const getNewsList = async (queries?: MicroCMSQueries) => {
  const ListData = await client.getList<News>({
    endpoint: "news",
    queries,
  });
  return ListData;
};

export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailDate = await client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
    customRequestInit: {
      cache: queries?.draftKey === undefined ? "force-cache" : "no-store",
      next: {
        revalidate: queries?.draftKey === undefined ? 60 : 0,
      },
    },
  });
  return detailDate;
};

export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Category>({
    endpoint: "categories",
    contentId,
    queries,
  });
  return detailData;
};
