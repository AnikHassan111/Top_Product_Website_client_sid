import { FaVoteYea } from "react-icons/fa";
import useAxiosPublicApi from "../../../Hooks/axiosPublicapi/useAxiosPublicApi";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const TrendignSectionCard = ({ product, refetche }) => {
  const { _id, img, name, tags, votes } = product;

  const { user } = useAuth();
  const navigate = useNavigate();

  const axisoPublic = useAxiosPublicApi();
  const handleVoteClick = (id) => {
    if (user) {
      const newVote = votes + 1;
      console.log(typeof newVote);
      const obj = {
        newVote,
      };
      axisoPublic
        .patch(`/updateFeaturedVote/${id}`, obj)
        .then((res) => {
          console.log(res);
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
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">
              <Link to={`/prodcutdetais/${_id}`}>{name}</Link>
            </h2>
            <button
              className="flex gap-1 items-center bg-black text-white rounded-lg px-2 py-1"
              onClick={() => handleVoteClick(_id)}
            >
              Vote
            </button>
          </div>
          <div className="flex justify-between">
            <p>
              {tags.map((data) => (
                <span
                  className="bg-slate-400 text-white px-2 text-xs py-1 mr-1 rounded-md"
                  key={data}
                >
                  {data}
                </span>
              ))}
            </p>
            <div className="badge badge-info text-white">
              <FaVoteYea className="mr-2"></FaVoteYea>
              {votes}
            </div>
          </div>
        </div>
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
      </div>
    </div>
  );
};

export default TrendignSectionCard;
