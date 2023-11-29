import { useQuery } from "@tanstack/react-query";
import Sesctiontitle from "../../../ComPonent/SectionTitle/Sesctiontitle";
import useAxiosPublicApi from "../../../Hooks/axiosPublicapi/useAxiosPublicApi";
import FeaturedProdcutCard from "../FeaturedSeciton/FeaturedProdcutCard";
import TrendignSectionCard from "./TrendignSectionCard";
import { Link } from "react-router-dom";

const TrendingProduct = () => {
  const axiosPublice = useAxiosPublicApi();
  const { data: tranding = [], refetch } = useQuery({
    queryKey: ["tranding"],
    queryFn: async () => {
      const res = await axiosPublice.get("/allProdcut/trandign/tranding");
      return res.data;
    },
  });
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
      <div className="flex justify-center my-4">
        <Link
          to={"/product"}
          className=" badge-info text-white py-2 px-4 rounded-lg  "
        >
          Show All Product
        </Link>
      </div>
    </div>
  );
};

export default TrendingProduct;
