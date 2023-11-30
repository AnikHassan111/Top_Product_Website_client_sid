import axios from "axios";

const axisoPublic = axios.create({
  baseURL: "https://top-tech-product.vercel.app",
});

const useAxiosPublicApi = () => {
  return axisoPublic;
};

export default useAxiosPublicApi;
