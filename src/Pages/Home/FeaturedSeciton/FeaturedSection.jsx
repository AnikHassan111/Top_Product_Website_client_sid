import { useQuery } from "@tanstack/react-query";
import useAxiosPublicApi from "../../../Hooks/axiosPublicapi/useAxiosPublicApi";
import FeaturedProdcutCard from "./FeaturedProdcutCard";

const FeaturedSection = () => {
  const axiosPublic = useAxiosPublicApi();
  const { data: featuredSectionData = [], refetch } = useQuery({
    queryKey: ["featuredSection"],
    queryFn: async () => {
      const res = await axiosPublic.get("/featuredProduct");
      return res.data;
    },
  });
  console.log(featuredSectionData);
  return (
    <div className="grid grid-cols-4 gap-2 my-10">
      {/* {featuredSectionData?.map(
        (product) => (
          <FeaturedProdcutCard
            refetche={refetch}
            key={product._id}
            product={product}
          ></FeaturedProdcutCard>
        )
        // console.log(product)
      )} */}
    </div>
  );
};

export default FeaturedSection;
