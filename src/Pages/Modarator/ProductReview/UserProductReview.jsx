import { useQuery } from "@tanstack/react-query";
import useAxiosSecureApi from "../../../Hooks/axiosSecureapi/useAxiosSecureApi";
import ProductReviewCard from "./ProductReviewCard";

const UserProductReview = () => {
  const axiisSecure = useAxiosSecureApi();
  const { data: userprodctReview = [], refetch } = useQuery({
    queryKey: ["userProdutReview"],
    queryFn: async () => {
      const res = await axiisSecure.get("/userAddProductReview");
      return res.data;
    },
  });
  console.log(userprodctReview);

  return (
    <div className="p-14">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Product name</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            {/* row 1 */}
            {userprodctReview.map((reviews) => (
              <ProductReviewCard
                key={reviews._id}
                reviews={reviews}
                refetch={refetch}
              ></ProductReviewCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserProductReview;
