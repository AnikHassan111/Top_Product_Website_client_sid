import { useQuery } from "@tanstack/react-query";
import useAxiosSecureApi from "../../../Hooks/axiosSecureapi/useAxiosSecureApi";
import ReportProductCard from "./ReportProductCard";

const ReporatedContent = () => {
  const axiisSecure = useAxiosSecureApi();
  const { data: reportProduct = [], refetch } = useQuery({
    queryKey: ["reportProduct"],
    queryFn: async () => {
      const res = await axiisSecure.get("/reportProduct");
      return res.data;
    },
  });
  return (
    <div className="p-14">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reportProduct.map((report, index) => (
              <ReportProductCard
                key={report._id}
                reports={report}
                refetch={refetch}
                index={index}
              ></ReportProductCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReporatedContent;
