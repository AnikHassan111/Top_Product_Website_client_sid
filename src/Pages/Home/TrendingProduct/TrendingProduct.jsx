import { useQuery } from "@tanstack/react-query";
import Sesctiontitle from "../../../ComPonent/SectionTitle/Sesctiontitle";
import useAxiosPublicApi from "../../../Hooks/axiosPublicapi/useAxiosPublicApi";

const TrendingProduct = () => {
  const axiosPublic = useAxiosPublicApi();
  const { data: tranding = [], refetch } = useQuery({
    queryKey: ["featuredSection"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allProdcut/tranding");
      return res.data;
    },
  });
  console.log("trandign", tranding);
  return (
    <div>
      <Sesctiontitle heading={"Trending Products"}></Sesctiontitle>
    </div>
  );
};

export default TrendingProduct;
