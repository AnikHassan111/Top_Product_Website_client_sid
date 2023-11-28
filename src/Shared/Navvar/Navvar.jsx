import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublicApi from "../../Hooks/axiosPublicapi/useAxiosPublicApi";
import { useEffect, useState } from "react";

const Navvar = () => {
  const { logOut, user } = useAuth();
  const [logo, setLogo] = useState("");

  const axisoPublic = useAxiosPublicApi();
  useEffect(() => {
    axisoPublic
      .get("/weblogo")
      .then((res) => {
        // console.log(res.data[0].image);
        setLogo(res.data[0].image);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axisoPublic]);

  const handleLogout = () => {
    logOut();
  };
  const navList = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/product"}>Product</NavLink>
      </li>
      {user ? (
        ""
      ) : (
        <>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="  bg-black bg-opacity-40 fixed w-full z-20">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu text-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navList}
            </ul>
          </div>
          <Link to={"/"}>
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img src={logo} className="w-12" alt="" />
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{navList}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown">
              <div tabIndex={0} className=" w-10 h-10 cursor-pointer">
                <img src={user.photoURL} className="rounded-full" alt="" />
              </div>
              <ul className="dropdown-content z-[1]  p-2 shadow bg-base-100 rounded-box w-52">
                <li className="cursor-text text-center">
                  <span className="font-bold">{user.displayName}</span>
                </li>
                <li>
                  <Link
                    to={"/dashboard/myprofile"}
                    className="btn btn-neutral w-full mt-2"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn btn-neutral  w-full my-3"
                  >
                    LogOut
                  </button>
                </li>{" "}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navvar;
