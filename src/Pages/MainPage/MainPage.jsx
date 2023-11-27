import { Outlet, useLocation } from "react-router-dom";
import Navvar from "../../Shared/Navvar/Navvar";

const MainPage = () => {
  const locatin = useLocation();
  const loginandregister =
    locatin.pathname.includes("login") || locatin.pathname.includes("register");
  return (
    <div>
      {loginandregister || <Navvar></Navvar>}
      <Outlet></Outlet>
    </div>
  );
};

export default MainPage;
