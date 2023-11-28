import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import GoogleLogin from "../../ComPonent/GoogleLogin/GoogleLogin";

const Register = () => {
  const { createuser, profile } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createuser(data.email, data.password)
      .then((res) => {
        profile(data.name, data.photourl)
          .then((res) => {
            Swal.fire({
              title: " success",
              text: "User created successfull",
              icon: "success",
            });
            reset();
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        Swal.fire({
          title: " error",
          text: "User not created ",
          icon: "error",
        });
        reset();
      });
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <section className="max-w-5xl w-full p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Register Now
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200">Name</label>
              <input
                id="username"
                type="text"
                name="name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500">Please Enter Your Name</span>
              )}
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">Please Enter Your Email</span>
              )}
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Photo Url
              </label>
              <input
                id="photo"
                name="photourl"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register("photourl", { required: true })}
              />
              {errors.photourl && (
                <span className="text-red-500">
                  Please Enter Your Photo Url
                </span>
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
                {...register("password", {
                  required: true,
                  pattern:
                    /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                  minLength: 6,
                  maxLength: 20,
                })}
              />
              {errors.password?.type == "required" && (
                <span className="text-red-500">Please Enter Your Password</span>
              )}
              {errors.password?.type == "pattern" && (
                <span className="text-red-500">
                  Password Sholud be spacial chacther and uppercase letter and
                  number
                </span>
              )}
              {errors.password?.type == "minLength" && (
                <span className="text-red-500">
                  Password Sholud be 6 chacther
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-between mt-6 items-center">
            <p>
              Already have an account
              <span className="text-blue-700 ml-2">
                <Link to={"/login"}>Login</Link>
              </span>
            </p>

            <input
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              value={"SingUp"}
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
