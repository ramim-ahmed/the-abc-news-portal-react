import useAuth from "@/hooks/useAuth";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  const { authUser, logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <nav className="flex items-center justify-between py-5">
      <div>
        <ul className="flex items-center space-x-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : ""
              }
            >
              Career
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-2">
        <div>
          {authUser ? (
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={authUser?.photoURL}
              alt=""
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          )}
        </div>
        {authUser ? (
          <div className="flex items-center space-x-2">
            <h1 className="font-medium">Hi, {authUser?.displayName}</h1>
            <button onClick={handleLogout} type="button" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                />
              </svg>
            </button>
          </div>
        ) : (
          <Link to="/login" className=" bg-primary text-white px-7 py-2">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
