import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import useAxiosSecureApi from "../axiosSecureapi/useAxiosSecureApi";

const AdminStaticPage = () => {
  const axiosSecure = useAxiosSecureApi();
  const { data: prodcutCount = [] } = useQuery({
    queryKey: ["productCount"],
    queryFn: async () => {
      const res = await axiosSecure.get("/getProductCount");
      return res.data;
    },
  });

  return (
    <div className="py-16 px-24">
      <PieChart
        className="w-96"
        data={[
          { title: "One", value: prodcutCount[1], color: "#E38627" },
          { title: "Two", value: prodcutCount[0], color: "#C13C37" },
        ]}
      />
      <div className="flex gap-1 items-center">
        <p className="w-5 h-5 bg-[#C13C37]"></p>
        <h3>Product</h3>
      </div>
      <div className="flex gap-1 items-center">
        <p className="w-5 h-5 bg-[#E38627]"></p>
        <h3>Users</h3>
      </div>
    </div>
  );
};

export default AdminStaticPage;
