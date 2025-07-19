import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type member = {
  name: string;
  position: string;
  profile: string;
  image: MicroCMSImage;
} & MicroCMSListContent;

export type category = {
  name: string;
} & MicroCMSListContent;

export type news = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  category: category;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// SDKのcreateClientでクライアント（サーバーとの通信部分）を作成
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// MicroCMSからメンバーを取得する関数
export const getMembersList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<member>({
      endpoint: "members",
      queries,
    })
  return listData;
}

// MicroCMSからニュースを取得する関数
export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<news>({
      endpoint: "news",
      queries,
    })
  return listData;
}