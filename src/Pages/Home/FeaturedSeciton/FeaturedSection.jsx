import { useQuery } from "@tanstack/react-query";
import useAxiosPublicApi from "../../../Hooks/axiosPublicapi/useAxiosPublicApi";
import FeaturedProdcutCard from "./FeaturedProdcutCard";

const FeaturedSection = () => {
  const axiosPublic = useAxiosPublicApi();
  const { data: featuredSectionData = [], refetch } = useQuery({
    queryKey: ["featuredSection"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allProdcut/featured");
      return res.data;
    },
  });
  console.log("featured item", featuredSectionData);
  return (
    <div className="grid grid-cols-4 gap-2 my-10">
      {featuredSectionData.map((prodcut) => (
        <FeaturedProdcutCard
          key={prodcut._id}
          product={prodcut}
          refetche={refetch}
        ></FeaturedProdcutCard>
      ))}
    </div>
  );
};

export default FeaturedSection;
