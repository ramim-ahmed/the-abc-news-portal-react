/* eslint-disable react/prop-types */
import useAuth from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
export default function PrivateRoute({ children }) {
  const location = useLocation();
  console.log(location);
  const { authUser } = useAuth();
  if (!authUser) {
    return <Navigate state={location?.pathname} to="/login" />;
  }
  return children;
}
