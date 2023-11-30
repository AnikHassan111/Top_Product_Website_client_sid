import axios from "axios";
import useAuth from "../useAuth";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
  baseURL: "https://top-tech-product.vercel.app",
});

const useAxiosSecureApi = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use((response) => {
    const token = localStorage.getItem("token");

    response.headers.authorization = `Bearer ${token}`;
    return response;
  }),
    (err) => {
      return Promise.reject(err);
    };

  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (err) => {
      const status = err.response.status;

      if (status == 401 || status == 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(err);
    }
  );
  return axiosSecure;
};

export default useAxiosSecureApi;
