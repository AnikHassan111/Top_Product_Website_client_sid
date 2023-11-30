import { useQuery } from "@tanstack/react-query";
import { Link, useLocation, useParams } from "react-router-dom";
import useAxiosSecureApi from "../../../Hooks/axiosSecureapi/useAxiosSecureApi";
import Swal from "sweetalert2";
import useAxiosPublicApi from "../../../Hooks/axiosPublicapi/useAxiosPublicApi";
import useAuth from "../../../Hooks/useAuth";
import { FaVoteYea } from "react-icons/fa";
import Sesctiontitle from "../../../ComPonent/SectionTitle/Sesctiontitle";

const UserProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  const axiosSecure = useAxiosSecureApi();
  const axisoPublic = useAxiosPublicApi();
  const { user } = useAuth();
  const { data: userproductDetails = {}, refetch } = useQuery({
    queryKey: ["userproductDetails"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/userprodcutdetais/${id}`);
      return res.data;
    },
  });

  const {
    _id,
    trending,
    report,
    featured,
    review,
    status,
    img,
    name,
    tags,
    votes,
    description,
    externalLink,
  } = userproductDetails;

  const handleVoteClick = (id) => {
    if (user) {
      const newVote = votes + 1;
      const obj = {
        newVote,
      };
      axisoPublic
        .patch(`/updateFeaturedVote/${id}`, obj)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Your Vote Granted",
              text: "Your Vote Successfully added",
              icon: "success",
            });
          }
          refetch();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      //   navigate("/login");
    }
  };

  const handleReport = () => {
    axiosSecure
      .patch(`/reportProduct/${_id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Report",
            text: "Your report is accpected",
            icon: "success",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-7xl mx-auto pt-20 pb-14">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold flex items-center ">
              {name}{" "}
              <span className="badge badge-secondary ml-5">
                <FaVoteYea className="mr-2"></FaVoteYea> {votes}
              </span>{" "}
            </h1>
            <p className="py-6">{description}</p>
            <p className="py-6">
              Some Tags:
              {tags?.map((ab) => (
                <span
                  className="bg-slate-400 py-1 px-2 rounded-lg ml-2 mr-2"
                  key={ab}
                >
                  {ab}
                </span>
              ))}
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => handleVoteClick(_id)}
                className="btn btn-neutral"
              >
                Vote{" "}
              </button>
              <div>
                <Link
                  state={location}
                  to={`/productReview/${id}`}
                  className="btn btn-outline btn-success mr-3"
                >
                  Post Review
                </Link>
                <button
                  onClick={handleReport}
                  className="btn btn-error text-white"
                >
                  Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sesctiontitle heading={"This Product Review "}></Sesctiontitle>
      {review?.length > 0 ? (
        <div className="grid grid-cols-3 gap-4 ">
          {review?.map((item) => (
            <div key={item.review} className="card  bg-base-100 shadow-xl">
              <div className="avatar mx-auto">
                <div className="w-16 rounded-full">
                  <img src={item.photo} />
                </div>
              </div>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.review}</p>
                <div className="card-actions ">
                  <button className="btn btn-ghost">
                    Rating: {item.rating}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <span className="text-center font-semibold text-3xl">
          No Review Here Please Review This Product
        </span>
      )}
    </div>
  );
};

export default UserProductDetails;
