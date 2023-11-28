import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const handleGoogle = () => {
    googleLogin()
      .then((res) => {
        Swal.fire({
          title: " success",
          text: "User login successfull",
          icon: "success",
        });
        navigate("/");
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
      <button onClick={handleGoogle} className="btn btn-outline">
        <FaGoogle /> Google
      </button>
    </div>
  );
};

export default GoogleLogin;
