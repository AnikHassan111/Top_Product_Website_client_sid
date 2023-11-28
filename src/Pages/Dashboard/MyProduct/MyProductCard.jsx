import { FaTrash } from "react-icons/fa";
import useAxiosSecureApi from "../../../Hooks/axiosSecureapi/useAxiosSecureApi";
import Swal from "sweetalert2";
import { GrUpgrade } from "react-icons/gr";
import { Link } from "react-router-dom";

const MyProductCard = ({ product, index, refetch }) => {
  const {
    _id,
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
  } = product;

  const axiosSecure = useAxiosSecureApi();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't to Delete this product",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/myproductDelete/${id}`)
          .then((res) => {
            // console.log(res);
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: " Success",
                text: "Your Product Add SuccessFully ",
                icon: "success",
              });
              refetch();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <tr key={product._id}>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{votes}</td>
      <td>{status}</td>
      <td className="text-xl cursor-pointer">
        <Link to={"/dashboard/myProductUpdate"}>
          <GrUpgrade />
        </Link>
      </td>
      <td className="cursor-pointer" onClick={() => handleDelete(_id)}>
        <FaTrash className="text-red-500"> </FaTrash>
      </td>
    </tr>
  );
};

export default MyProductCard;
