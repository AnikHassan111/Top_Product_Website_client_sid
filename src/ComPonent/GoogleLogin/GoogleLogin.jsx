import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAxiosSecureApi from "../../Hooks/axiosSecureapi/useAxiosSecureApi";
const GoogleLogin = ({ goto }) => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecureApi();
  const handleGoogle = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user.displayName);
        const userRole = {
          email: res.user.email,
          name: res.user.displayName,
          role: "",
        };
        axiosSecure
          .post("/userRole", userRole)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        Swal.fire({
          title: " success",
          text: "User login successfull",
          icon: "success",
        });
        navigate(goto);
      })
      .catch((err) => {
        Swal.fire({
          title: " error",
          text: "User not login ",
          icon: "error",
        });
      });
  };
  return (
    <div>
      <button onClick={handleGoogle} className="btn btn-outline cursor-pointer">
        <FaGoogle /> Google
      </button>
    </div>
  );
};

export default GoogleLogin;
