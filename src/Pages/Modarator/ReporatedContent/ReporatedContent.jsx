import { useQuery } from "@tanstack/react-query";
import useAxiosSecureApi from "../../../Hooks/axiosSecureapi/useAxiosSecureApi";

const ReporatedContent = () => {
  const axiisSecure = useAxiosSecureApi();
  const { data: reportProduct } = useQuery({
    queryKey: ["reportProduct"],
    queryFn: async () => {
      const res = await axiisSecure.get("/reportProduct");
      return res.data;
    },
  });
  console.log(reportProduct);
  return <div></div>;
};

export default ReporatedContent;
