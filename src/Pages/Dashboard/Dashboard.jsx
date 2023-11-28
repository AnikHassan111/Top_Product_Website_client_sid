import {
  FaBox,
  FaCartPlus,
  FaHome,
  FaMemory,
  FaProductHunt,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex max-w-7xl mx-auto ">
      <div className="bg-blue-800 w-64 min-h-screen text-white   ">
        <ul className="menu py-5 px-10 ">
          <>
            <li>
              <NavLink to={"/dashboard/myprofile"}>
                <CgProfile /> My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/addProduct"}>
                <FaCartPlus></FaCartPlus> Add Product
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/myProduct"}>
                <FaBox></FaBox> My Product
              </NavLink>
            </li>
          </>
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome></FaHome> Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
