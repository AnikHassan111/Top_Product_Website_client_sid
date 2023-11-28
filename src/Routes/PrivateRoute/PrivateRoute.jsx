import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location} to={"/login"}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
