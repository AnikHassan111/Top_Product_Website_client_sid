import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Product from "../Pages/Product/Product";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProductDetails from "../Pages/Product/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "product",
        element: <Product></Product>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "prodcutdetais/:id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

export default router;
