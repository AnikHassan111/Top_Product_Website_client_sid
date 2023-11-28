import useAuth from "../../../Hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="w-96 mt-20 ml-20">
      <div className="card  bg-base-100 shadow-xl">
        <div className="avatar mx-auto">
          <div className="w-16 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{user?.displayName}</h2>
          <p>{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
