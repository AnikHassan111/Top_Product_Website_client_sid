import { FaTrash } from "react-icons/fa";
import useAxiosSecureApi from "../../../Hooks/axiosSecureapi/useAxiosSecureApi";

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

  //   const handleDelete = (id) => {
  //     axiosSecure
  //       .delete(`/myproductDelete/${id}`)
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  return (
    <tr key={product._id}>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{votes}</td>
      <td>{status}</td>
      <td>update</td>
      <td className="cursor-pointer" onClick={() => handleDelete(_id)}>
        <FaTrash className="text-red-500"> </FaTrash>
      </td>
    </tr>
  );
};

export default MyProductCard;
