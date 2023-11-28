import { useState } from "react";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";
import Sesctiontitle from "../../../ComPonent/SectionTitle/Sesctiontitle";
import useAxiosSecureApi from "../../../Hooks/axiosSecureapi/useAxiosSecureApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const ProductUpdate = () => {
  const [selected, setSelected] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecureApi();
  const { id } = useParams();
  const { data: ownerproduct } = useQuery({
    queryKey: ["updateOwnerdata"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/ownerProductUpdate/${id}`);
      return res.data;
    },
  });
  const { img, name, tags, description, externalLink } = ownerproduct;

  const onSubmit = (data) => {};
  return (
    <div>
      <div className="p-20">
        <Sesctiontitle heading={"Update product"}></Sesctiontitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Product Name
              </label>
              <input
                id="username"
                placeholder="Product Name"
                type="text"
                name="name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500">
                  Please Enter Your Product Name
                </span>
              )}
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Product Image
              </label>
              <input
                id="emailAddress"
                placeholder=" Product Image"
                type="text"
                name="Image"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register("Image", { required: true })}
              />
              {errors.Image && (
                <span className="text-red-500">
                  Please Enter Your Product Image Url
                </span>
              )}
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Product Description
              </label>
              <input
                id="photo"
                placeholder="Product Description"
                name="Description"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register("Description", { required: true })}
              />
              {errors.Description && (
                <span className="text-red-500">
                  Please Enter Your Product Description
                </span>
              )}
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Product tags
              </label>
              <TagsInput
                value={selected}
                onChange={setSelected}
                name="fruits"
                placeHolder="enter fruits"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                External Links
              </label>
              <input
                id="photo"
                name="ExternalLinks"
                placeholder="External Links"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                {...register("ExternalLinks")}
              />
            </div>
          </div>

          <div className="flex justify-center mt-6 items-center">
            <input
              type="submit"
              className="px-8 cursor-pointer py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              value={"Submit "}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductUpdate;
