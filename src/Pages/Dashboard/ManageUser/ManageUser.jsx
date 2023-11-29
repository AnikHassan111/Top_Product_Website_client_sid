import { useQuery } from "@tanstack/react-query";
import useAxiosSecureApi from "../../../Hooks/axiosSecureapi/useAxiosSecureApi";
import useAuth from "../../../Hooks/useAuth";
import ManageUsersCard from "./ManageUsersCard";

const ManageUser = () => {
  const axiosSecure = useAxiosSecureApi();
  const { user } = useAuth();
  const { data: allusers, refetch } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/alluser`);
      return res.data;
    },
  });
  return (
    <div>
      <div className="p-12">
        <div className="overflow-x-auto ">
          <table className="table ">
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Votes </th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className="">
              {allusers?.map((user, index) => (
                <ManageUsersCard
                  user={user}
                  key={index}
                  index={index}
                  refetch={refetch}
                ></ManageUsersCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
