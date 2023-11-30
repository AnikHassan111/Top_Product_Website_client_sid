import axios from "axios";
import useAuth from "../useAuth";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
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
      console.log("Error", err.response.status);
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
