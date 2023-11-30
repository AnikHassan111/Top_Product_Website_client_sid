import { FaBox, FaCartPlus, FaChartPie, FaHome, FaUsers } from "react-icons/fa";
import { MdOutlineReviews, MdReportProblem } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { NavLink, Outlet } from "react-router-dom";
import useIsAdmin from "../../Hooks/IsAdmin/IsAdmin";
import { useState } from "react";

const Dashboard = () => {
  const [Adminstatus] = useIsAdmin();

  const isAdmin = Adminstatus?.isAdmin == "Admin";
  const isModeratro = Adminstatus?.isAdmin == "Moderator";

  return (
    <div className="flex max-w-7xl mx-auto ">
      <div className="bg-blue-800 w-80 min-h-screen text-white   ">
        <ul className="menu py-5 px-8 ">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/magageUser"}>
                  <FaUsers></FaUsers> Mangae User
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/adminStaticPage"}>
                  <FaChartPie></FaChartPie> Admin Statistics Page
                </NavLink>
              </li>
            </>
          ) : isModeratro ? (
            <>
              <li>
                <NavLink to={"/dashboard/reporatedContent"}>
                  <MdReportProblem /> Reported Contents
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/productReview"}>
                  <MdOutlineReviews />
                  Product Review
                </NavLink>
              </li>
            </>
          ) : (
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
          )}
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
