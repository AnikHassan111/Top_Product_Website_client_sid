import Swal from "sweetalert2";
import useAxiosPublicApi from "../../../Hooks/axiosPublicapi/useAxiosPublicApi";
import useAuth from "../../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { FaVoteYea } from "react-icons/fa";

const FeaturedProdcutCard = ({ product, refetche }) => {
  const { _id, img, name, tags, votes } = product;
  const { user } = useAuth();
  const navigate = useNavigate();

  const axisoPublic = useAxiosPublicApi();
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
          refetche();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={img} className="h-52 w-full" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <Link to={`/prodcutdetais/${_id}`}> {name}</Link>
            <div className="badge badge-secondary">
              <FaVoteYea className=""></FaVoteYea>
              {votes}
            </div>
          </h2>
          <div className="flex gap-2  ">
            {tags?.map((data) => (
              <span
                className="bg-gray-400 px-2 p-1 text-xs text-white rounded-md "
                key={data}
              >
                {data}
              </span>
            ))}
          </div>

          <div className="card-actions justify-end">
            <div className="badge badge-outline ">
              <button
                className="flex items-center gap-2"
                onClick={() => handleVoteClick(_id)}
              >
                Vote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProdcutCard;
