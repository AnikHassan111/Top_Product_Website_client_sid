import { useQuery } from "@tanstack/react-query";
import useAxiosSecureApi from "../../../Hooks/axiosSecureapi/useAxiosSecureApi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

const ProductReviewCard = ({ reviews, refetch, index }) => {
  const axiisSecure = useAxiosSecureApi();
  const [productAccpectorReject, setProductAccpectorReject] = useState(false);
  const {
    featured,
    review,
    report,
    status,
    img,
    name,
    tags,
    votes,
    description,
    externalLink,
    ownerName,
    ownerEmail,
    ownerImg,
  } = reviews;
  const productojb = {
    featured,
    review,
    report,
    status,
    img,
    name,
    tags,
    votes,
    description,
    externalLink,
    ownerName,
    ownerEmail,
    ownerImg,
  };

  const handleAccpect = (id) => {
    const updateObj = {
      statuss: " Accepted",
    };
    axiisSecure
      .patch(`/userProductstatusUpdate/${id}`, updateObj)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          setProductAccpectorReject(true);

          axiisSecure
            .post("/userproductAddMaindatabase", productojb)
            .then((ress) => {
              if (res.data.insertedId) {
                Swal.fire({
                  title: "Accpect",
                  text: "Accpect this Product",
                  icon: "success",
                });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleReject = (id) => {
    const updateObj = {
      statuss: " Rejected",
    };
    axiisSecure
      .patch(`/userProductstatusUpdate/${id}`, updateObj)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Reject",
            text: "Reject this Product",
            icon: "success",
          });
          console.log(res);
          setProductAccpectorReject(true);
        }
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <tr key={reviews._id}>
      <th>{index + 1}</th>
      <td>{reviews.name}</td>
      <td>
        <Link
          to={`/userprodcutdetais/${reviews._id}`}
          className="px-2 py-1 bg-slate-400 text-white rounded-lg"
        >
          Product Details
        </Link>
      </td>
      <td>
        {" "}
        <button className="btn btn-neutral">Featured</button>
      </td>
      <td className=" py-1   w-10 mx-11 text-white rounded-lg"></td>
      <td
        onClick={() => handleAccpect(reviews._id)}
        className="px-2 py-1 text-center di   cursor-pointer  rounded-lg"
      >
        {productAccpectorReject ? (
          <button className="btn btn-neutral" disabled>
            Accpect
          </button>
        ) : (
          <button className="btn btn-neutral">Accpect</button>
        )}
      </td>
      <td className=" py-1   text-center   w-10 mx-11 text-white rounded-lg"></td>
      <td onClick={() => handleReject(reviews._id)} className="">
        {productAccpectorReject ? (
          <button className="btn btn-neutral" disabled>
            Reject
          </button>
        ) : (
          <button className="btn btn-neutral">Reject</button>
        )}
      </td>
    </tr>
  );
};

export default ProductReviewCard;
