import React from "react";
import useAxiosSecureApi from "../../../Hooks/axiosSecureapi/useAxiosSecureApi";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsersCard = ({ user, index, refetch }) => {
  const { _id, email, name, role } = user;
  const axiosSecure = useAxiosSecureApi();

  const handleRoleChange = (roles) => {
    const userEmail = {
      email: user?.email,
      roles,
    };
    axiosSecure
      .patch(`/changeUserRole`, userEmail)
      .then((res) => {
        Swal.fire({
          title: " Success",
          text: "User Role Change Success fully",
          icon: "success",
        });
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = (id) => {
    axiosSecure
      .delete(`/userDelete/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: " Success",
            text: "User Delete Successfully",
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
      <td>{user?.name}</td>
      <td>{user?.email}</td>
      <td>
        <details className="dropdown">
          <summary className="m-1 btn">Choose user role</summary>
          <ul className="p-2 shadow menu  z-[1] bg-base-100 rounded-box absolute -top-16 -left-16 ">
            <li className="" onClick={() => handleRoleChange("Admin")}>
              <a>Admin</a>
            </li>
            <li onClick={() => handleRoleChange("Moderator")}>
              <a>Moderator</a>
            </li>
            <li onClick={() => handleRoleChange("")}>
              <a>Normal User</a>
            </li>
          </ul>
        </details>
      </td>

      <td className="text-sm cursor-pointer">
        {user.roles ? user.roles : <FaUser></FaUser>}
      </td>
      <td className="cursor-pointer" onClick={() => handleDelete(_id)}>
        <FaTrash className="text-red-500"> </FaTrash>
      </td>
    </tr>
  );
};

export default ManageUsersCard;
