import NewsCategories from "@/components/NewsCategories";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div>
      <div>
        <NewsCategories />
      </div>
      <Outlet />
      <div>
        <h1>Right Side Bar</h1>
      </div>
    </div>
  );
}
