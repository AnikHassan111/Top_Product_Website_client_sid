import useAxiosPublicApi from "../../../Hooks/axiosPublicapi/useAxiosPublicApi";

const FeaturedProdcutCard = ({ product, refetche }) => {
  const { _id, img, name, tags, vote } = product;
  console.log(_id);
  const axisoPublic = useAxiosPublicApi();
  //   const handleVoteClick = (id) => {
  //     const newVote = vote + 1;
  //     console.log(typeof newVote);
  //     const obj = {
  //       newVote,
  //     };
  //     // axisoPublic
  //     //   .patch(`/updateFeaturedVote/${id}`, obj)
  //     //   .then((res) => {
  //     //     console.log(res);
  //     //   })
  //     //   .catch((err) => {
  //     //     console.log(err);
  //     //   });
  //   };
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={img} className="h-52" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{vote}</div>
          </h2>
          {/* <div className="flex gap-2  ">
            {tags?.map((data) => (
              <span
                className="bg-gray-400 px-2 p-1 text-xs text-white rounded-md "
                key={data._id}
              >
                {data}
              </span>
            ))}
          </div> */}

          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              {/* <button onClick={() => handleVoteClick(_id)}>Vote</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProdcutCard;
