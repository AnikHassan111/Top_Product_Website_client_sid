import { useQuery } from "@tanstack/react-query";
import useAxiosSecureApi from "../../../Hooks/axiosSecureapi/useAxiosSecureApi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductReviewCard = ({ review, refetch }) => {
  const axiisSecure = useAxiosSecureApi();

  const handleAccpect = (id) => {
    const updateObj = {
      statuss: " Accepted",
    };
    axiisSecure
      .patch(`/userProductstatusUpdate/${id}`, updateObj)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Accpect",
            text: "Accpect this Product",
            icon: "success",
          });
        }
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(review);
  return (
    <tr key={review._id}>
      <th>1</th>
      <td>{review.name}</td>
      <td>
        <Link
          to={`/userprodcutdetais/${review._id}`}
          className="px-2 py-1 bg-slate-400 text-white rounded-lg"
        >
          Product Details
        </Link>
      </td>
      <td className=" py-1 cursor-pointer   text-center w-10 mx-11 bg-slate-400 text-white rounded-lg">
        Featured
      </td>
      <td className=" py-1   w-10 mx-11 text-white rounded-lg"></td>
      <td
        onClick={() => handleAccpect(review._id)}
        className="px-2 py-1 text-center   cursor-pointer bg-green-500 text-white rounded-lg"
      >
        Accpect
      </td>
      <td className=" py-1   text-center   w-10 mx-11 text-white rounded-lg"></td>
      <td className="px-2 py-1 cursor-pointer  text-center  bg-red-500 text-white rounded-lg">
        Reject
      </td>
    </tr>
  );
};

export default ProductReviewCard;
