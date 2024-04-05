import News from "@/components/News";
import NewsItem from "@/components/NewsItem";
import { useLoaderData } from "react-router-dom";
export default function Home() {
  const allNews = useLoaderData();
  return (
    <div className="">
      <News>
        {allNews?.map((news) => (
          <NewsItem key={news?._id} news={news} />
        ))}
      </News>
    </div>
  );
}
