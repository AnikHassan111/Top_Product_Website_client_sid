import { useEffect, useState } from "react";
import useAxiosPublicApi from "../../../Hooks/axiosPublicapi/useAxiosPublicApi";

const Banner = () => {
  const [bannerItme, setBannerItme] = useState([]);

  const axisoPublic = useAxiosPublicApi();
  const bannerImg = bannerItme[0];
  useEffect(() => {
    axisoPublic
      .get("/banneritem")
      .then((res) => {
        setBannerItme(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axisoPublic]);
  return (
    <div className="">
      <div className="relative -z-10 ">
        <img
          src={bannerImg?.img}
          className="w-full lg:h-[600px] md:h-[500px] rounded-lg"
          alt=""
        />
        <div className="absolute rounded-lg top-0 w-full bg-opacity-60 flex justify-center items-center h-full text-white text-center bg-black  ">
          <div>
            <h1 className="md:text-6xl text-4xl font-semibold ">
              {bannerImg?.title}
            </h1>
            <h1 className="w-4/5 text-sm mx-auto mt-3">
              {bannerImg?.description}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
