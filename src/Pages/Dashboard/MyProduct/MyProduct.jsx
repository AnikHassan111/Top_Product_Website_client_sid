import { useQuery } from "@tanstack/react-query";
import useAxiosSecureApi from "../../../Hooks/axiosSecureapi/useAxiosSecureApi";
import useAuth from "../../../Hooks/useAuth";
import { FaTrash } from "react-icons/fa";
import MyProductCard from "./MyProductCard";

const MyProduct = () => {
  const axiosSecure = useAxiosSecureApi();
  const { user } = useAuth();
  const { data: myproducts, refetch } = useQuery({
    queryKey: ["myproduct"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myproduct?email=${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="p-12">
      <div className="overflow-x-auto ">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Votes </th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myproducts?.map((product, index) => (
              <MyProductCard
                key={product._id}
                product={product}
                index={index}
                refetch={refetch}
              ></MyProductCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
