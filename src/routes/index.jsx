import PrivateRoute from "@/components/PrivateRoute";
import HomeLayout from "@/layouts/HomeLayout";
import RootLayout from "@/layouts/RootLayout";
import { fetchAllNews, fetchNewsCategories } from "@/lib/query";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NewsDetails from "@/pages/NewsDetails";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
        loader: async () => fetchNewsCategories(),
        children: [
          {
            index: true,
            element: <Home />,
            loader: async () => fetchAllNews(),
          },
        ],
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <NewsDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default routes;
