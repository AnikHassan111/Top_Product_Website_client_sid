import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Product from "../Pages/Product/Product";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProductDetails from "../Pages/Product/ProductDetails/ProductDetails";
import ProductReview from "../Pages/Product/ProductReview/ProductReview";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import MyProduct from "../Pages/Dashboard/MyProduct/MyProduct";
import ProductUpdate from "../Pages/Product/ProductUpdate/ProductUpdate";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import ReporatedContent from "../Pages/Modarator/ReporatedContent/ReporatedContent";
import UserProductReview from "../Pages/Modarator/ProductReview/UserProductReview";
import UserProductDetails from "../Pages/Modarator/ProductReview/UserProductDetails";

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
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "userprodcutdetais/:id",
        element: (
          <PrivateRoute>
            <UserProductDetails></UserProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "productReview/:id",
        element: <ProductReview></ProductReview>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myprofile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "myProduct",
        element: <MyProduct></MyProduct>,
      },
      {
        path: "myProductUpdate/:id",
        element: <ProductUpdate></ProductUpdate>,
      },
      {
        path: "magageUser",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "reporatedContent",
        element: <ReporatedContent></ReporatedContent>,
      },
      {
        path: "productReview",
        element: <UserProductReview></UserProductReview>,
      },
    ],
  },
]);

export default router;
