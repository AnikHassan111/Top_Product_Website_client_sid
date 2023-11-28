import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecureApi from "../../../Hooks/axiosSecureapi/useAxiosSecureApi";

const ProductDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecureApi();
  const { data: productDetails } = useQuery({
    queryKey: ["productDetails"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/productDetails/${id}`);
      return res.data;
    },
  });
  console.log(productDetails);
  return (
    <div className="max-w-7xl mx-auto pt-20">
      <h1>Details</h1>
    </div>
  );
};

export default ProductDetails;
