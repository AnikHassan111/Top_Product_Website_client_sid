import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosSecureApi from "../../../Hooks/axiosSecureapi/useAxiosSecureApi";
import Swal from "sweetalert2";

const ReportProductCard = ({ reports, refetch, index }) => {
  const axiisSecure = useAxiosSecureApi();
  const {
    _id,
    trending,
    report,
    featured,
    review,
    status,
    img,
    name,
    tags,
    votes,
    description,
    externalLink,
  } = reports;

  const handleProductDelete = (id) => {
    axiisSecure
      .delete(`/reportProductDelete/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: " Success",
            text: "Product Delete Successfully",
            icon: "success",
          });
          refetch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>
        <Link
          to={`/prodcutdetais/${_id}`}
          className="px-2 py-1 bg-slate-400 text-white rounded-lg"
        >
          Product Details
        </Link>
      </td>
      <td className="cursor-pointer" onClick={() => handleProductDelete(_id)}>
        <FaTrash className="text-red-500"></FaTrash>
      </td>
    </tr>
  );
};

export default ReportProductCard;
