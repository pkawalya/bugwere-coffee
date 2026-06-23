import { getNewsArticles } from "@/lib/data";
import NewsClient from "@/components/NewsClient";

export const revalidate = 60;

export default async function NewsPage() {
  const news = await getNewsArticles();
  return <NewsClient news={news} />;
}
