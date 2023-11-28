import { Outlet, useLocation } from "react-router-dom";
import Navvar from "../../Shared/Navvar/Navvar";
import Footer from "../../Shared/Footer/Footer";

const MainPage = () => {
  const locatin = useLocation();
  const loginandregister =
    locatin.pathname.includes("login") || locatin.pathname.includes("register");
  const footer =
    locatin.pathname.includes("login") ||
    locatin.pathname.includes("register") ||
    locatin.pathname.includes("prodcutdetais");

  return (
    <div>
      {loginandregister || <Navvar></Navvar>}

      <Outlet></Outlet>
      {footer || <Footer></Footer>}
    </div>
  );
};

export default MainPage;
