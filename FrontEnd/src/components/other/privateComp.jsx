import { Navigate, Outlet } from "react-router-dom";

// Example authentication function
const isAuthenticated = () => {
  return localStorage.getItem("user") ? true : false;
};
function Private() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
}

export default Private;
