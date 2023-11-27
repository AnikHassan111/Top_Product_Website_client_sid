import { useQuery } from "@tanstack/react-query";
import Sesctiontitle from "../../../ComPonent/SectionTitle/Sesctiontitle";
import useAxiosPublicApi from "../../../Hooks/axiosPublicapi/useAxiosPublicApi";
import FeaturedProdcutCard from "../FeaturedSeciton/FeaturedProdcutCard";
import TrendignSectionCard from "./TrendignSectionCard";

const TrendingProduct = () => {
  const axiosPublice = useAxiosPublicApi();
  const { data: tranding = [], refetch } = useQuery({
    queryKey: ["tranding"],
    queryFn: async () => {
      const res = await axiosPublice.get("/allProdcut/trandign/tranding");
      return res.data;
    },
  });
  console.log("trandign", tranding);
  return (
    <div>
      <Sesctiontitle heading={"Trending Products"}></Sesctiontitle>
      <div className="grid grid-cols-3 gap-3">
        {tranding.map((prodcut) => (
          <TrendignSectionCard
            key={prodcut._id}
            product={prodcut}
            refetche={refetch}
          ></TrendignSectionCard>
        ))}
      </div>
    </div>
  );
};

export default TrendingProduct;
