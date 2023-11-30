import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAxiosSecureApi from "../../../Hooks/axiosSecureapi/useAxiosSecureApi";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const ProductReview = () => {
  const { id } = useParams();
  const location = useLocation();
  const goTo = location.state.pathname || "/";
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecureApi();
  const { user } = useAuth();
  const { data: producteview = {} } = useQuery({
    queryKey: ["productDetails"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/productDetails/${id}`);
      return res.data;
    },
  });
  const allreview = producteview.review;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = user?.name;
    const review = data.review;
    const rating = data.rating;
    const photo = user?.photoURL;

    const reviewObj = {
      name,
      review,
      rating,
      photo,
    };

    allreview.push(reviewObj);
    axiosSecure
      .patch(`/updateReview/${id}`, allreview)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Review",
            text: "Your Review Accpected",
            icon: "success",
          });

          navigate(goTo);
        }
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center">
        <section className="max-w-5xl w-full p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Review Now
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 dark:text-gray-200">Name</label>
                <input
                  id="username"
                  type="text"
                  name="name"
                  placeholder={user?.displayName}
                  defaultValue={user?.displayName}
                  readOnly
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {errors.name && (
                  <span className="text-red-500">Please Enter Your Name</span>
                )}
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Photo Url
                </label>
                <input
                  readOnly
                  placeholder={user?.photoURL}
                  id="username"
                  type="text"
                  name="name"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {errors.name && (
                  <span className="text-red-500">Please Enter Your Name</span>
                )}
              </div>

              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Review here
                </label>
                <input
                  id="emailAddress"
                  type="text"
                  name="review"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  {...register("review", { required: true })}
                />
                {errors.review?.type == "required" && (
                  <span className="text-red-500">Please Enter Your Review</span>
                )}
              </div>

              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Rating
                </label>
                <input
                  id="passwordConfirmation"
                  type="text"
                  name="rating"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  {...register("rating", {
                    required: true,
                    pattern: /[0-5]/,
                    maxLength: 3,
                  })}
                />
                {errors.rating?.type == "required" && (
                  <span className="text-red-500">Please Enter Your Rating</span>
                )}
                {errors.rating?.type == "pattern" && (
                  <span className="text-red-500">
                    You should be maximum rating is 5
                  </span>
                )}
                {errors.rating?.type == "maxLength" && (
                  <span className="text-red-500">
                    You should be maximum rating is 5
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-between mt-6 items-center">
              <input
                type="submit"
                className="px-8 py-2.5 w-full leading-5 cursor-pointer text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                value={"Submit"}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ProductReview;
