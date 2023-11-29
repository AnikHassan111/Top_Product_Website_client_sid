import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ProdcutCard from "./ProductCard";
import useAxiosPublicApi from "../../Hooks/axiosPublicapi/useAxiosPublicApi";

const Product = () => {
  const axiosPublic = useAxiosPublicApi();
  const { data: prodcut = [], refetch } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axiosPublic("/product");
      return res.data;
    },
  });
  return (
    <div className="pt-20 max-w-7xl mx-auto ">
      <div className="w-fit mx-auto my-4">
        <input
          type="text"
          className="bg-black py-2 px-4 rounded-lg text-white mr-2 lg:w-96 w-42"
          placeholder="search here"
        />
        <button className="py-2 px-4 bg-slate-600 text-white rounded-lg ">
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-2 gap-3 ">
        {prodcut.map((item) => (
          <ProdcutCard
            key={item._id}
            product={item}
            refetche={refetch}
          ></ProdcutCard>
        ))}
      </div>
    </div>
  );
};

export default Product;
