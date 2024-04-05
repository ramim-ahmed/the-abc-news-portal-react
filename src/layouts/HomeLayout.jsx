import LatestNews from "@/components/LatestNews";
import Nav from "@/components/Nav";
import NewsCategories from "@/components/NewsCategories";
import TopHeader from "@/components/TopHeader";
import { Outlet, useLoaderData } from "react-router-dom";

export default function HomeLayout() {
  const data = useLoaderData();
  return (
    <div className="max-w-6xl mx-auto">
      <TopHeader />
      <LatestNews />
      <Nav />
      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-3">
          <NewsCategories categories={data} />
        </div>
        <div className="col-span-6">
          <Outlet />
        </div>
        <div className="col-span-3 border">
          <div className=" sticky top-0">
            <h1>right bar</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
