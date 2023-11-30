import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import ProdcutCard from "./ProductCard";
import useAxiosPublicApi from "../../Hooks/axiosPublicapi/useAxiosPublicApi";
// import useAxiosSecureApi from "../../Hooks/axiosSecureapi/useAxiosSecureApi";

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const perPageItem = 20;
  const numbreOfPage = [1, 2, 3, 4];
  const axiosPublic = useAxiosPublicApi();
  const [prodcut, setprodcut] = useState(null);
  const [input, setInput] = useState("");
  const { data: mainProduct = [], refetch } = useQuery({
    queryKey: ["mainProduct"],
    queryFn: async () => {
      const res = await axiosPublic(
        `/product?page=${currentPage}&size=${perPageItem}`
      );
      return res.data;
    },
  });

  const handlePrevisousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handlenextPage = () => {
    if (currentPage < numbreOfPage.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  useEffect(() => {
    setprodcut(mainProduct);
  }, [mainProduct]);
  const handleSearch = () => {
    axiosPublic
      .get(`/searchProduct/${input}`)
      .then((res) => {
        setprodcut(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="pt-20 max-w-7xl mx-auto ">
      <div className="w-fit mx-auto my-4">
        <input
          onInput={(e) => setInput(e.target.value)}
          type="text"
          className="bg-black py-2 px-4 rounded-lg text-white mr-2 lg:w-96 w-42"
          placeholder="search here"
        />
        <button
          onClick={handleSearch}
          className="py-2 px-4 bg-slate-600 text-white rounded-lg "
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-2 gap-3 ">
        {prodcut?.map((item) => (
          <ProdcutCard
            key={item._id}
            product={item}
            refetche={refetch}
          ></ProdcutCard>
        ))}
      </div>
      <div className="my-10 w-fit mx-auto">
        <p className="text-center">
          {" "}
          Page Number :
          <span className="text-yellow-500 py-1 px-2 rounded-lg">
            {currentPage}
          </span>
        </p>
        <button onClick={handlePrevisousPage} className="btn btn-accent mr-5">
          Previous
        </button>
        {numbreOfPage.map((page) => (
          <button
            onClick={() => {
              setCurrentPage(page);
            }}
            className="btn btn-outline btn-info mr-2 "
            key={page}
          >
            {page}
          </button>
        ))}
        <button onClick={handlenextPage} className="btn btn-accent">
          Next
        </button>
      </div>
    </div>
  );
};

export default Product;
