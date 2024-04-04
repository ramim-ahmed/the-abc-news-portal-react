import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <h1>top header</h1>
      <h1>latest news</h1>
      <nav>nav bar</nav>
      <Outlet />
    </div>
  );
}
