import axios from "axios";

const axisoPublic = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosPublicApi = () => {
  return axisoPublic;
};

export default useAxiosPublicApi;
