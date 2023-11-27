import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import GoogleLogin from "../../ComPonent/GoogleLogin/GoogleLogin";

const Login = () => {
  const { singIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    singIn(data.email, data.password)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: " success",
          text: "Login Successfull",
          icon: "success",
        });
        reset();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: " error",
          text: "Invalid User ",
          icon: "error",
        });
        reset();
      });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <section className="max-w-5xl w-full p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Login Now
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">Please Enter Your Email</span>
              )}
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Password
              </label>
              <input
                id="passwordConfirmation"
                type="password"
                name="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register("password", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">Please Enter Your Password</span>
              )}
            </div>
          </div>

          <div className="flex justify-between mt-6 items-center">
            <p>
              Dont have an account?
              <span className="text-blue-700 ml-2">
                <Link to={"/register"}>Register</Link>
              </span>
            </p>
            <input
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              value={"Login"}
              type="submit"
            />
          </div>
        </form>
        <GoogleLogin></GoogleLogin>
      </section>
    </div>
  );
};

export default Login;
