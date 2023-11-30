import { useQuery } from "@tanstack/react-query";
import useAxiosSecureApi from "../axiosSecureapi/useAxiosSecureApi";
import useAuth from "../useAuth";

const useIsAdmin = () => {
  const axiosSecure = useAxiosSecureApi();
  const { user } = useAuth();

  const { data: Adminstatus } = useQuery({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/checkAdmin/${user?.email}`);
      return res.data;
    },
  });
  return [Adminstatus];
};

export default useIsAdmin;
