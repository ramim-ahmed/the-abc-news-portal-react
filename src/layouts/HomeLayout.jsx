import NewsCategories from "@/components/NewsCategories";
import TopHeader from "@/components/TopHeader";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="max-w-6xl mx-auto">
      <TopHeader />
      <h1>latest news</h1>
      <nav>nav bar</nav>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3 border">
          <NewsCategories />
        </div>
        <div className="col-span-6 border">
          <Outlet />
        </div>
        <div className="col-span-3 border">
          <h1>Right Side Bar</h1>
        </div>
      </div>
    </div>
  );
}
