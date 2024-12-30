import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import OtpVerification from "../pages/OtpVerification";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import UserMenuMobile from "../pages/UserMenuMobile";
import Profile from "../pages/Profile";
import Dashboard from "../layouts/Dashboard";
import AdminPermision from "../layouts/AdminPermission";
import CategoryPage from "../pages/CategoryPage";
import SubCategoryPage from "../pages/SubCategoryPage";
import ProductAdmin from "../pages/ProductAdmin";
import UploadProduct from "../pages/UploadProduct";
import ProductListPage from "../pages/ProductListPage";
import ProductDisplayPage from "../pages/ProductDisplayPage";
import Address from "../pages/Address";
import MyOrders from "../pages/MyOrders";
import CheckoutPage from "../pages/CheckoutPage";
import Success from "../pages/Success";
import Cancel from "../pages/Cancel";

const router = createBrowserRouter([
  {
      path : "/",
      element : <App/>,
      children : [
          {
              path : "",
              element : <Home/>
          },
          {
              path : "search",
              element : <SearchPage/>
          },
          {
              path : 'login',
              element : <Login/>
          },
          {
              path : "register",
              element : <Register/>
          },
          {
              path : "forgot-password",
              element : <ForgotPassword/>
          },
          {
              path : "verification-otp",
              element : <OtpVerification/>
          },
          {
              path : "reset-password",
              element : <ResetPassword/>
          },
          {
              path : "user",
              element : <UserMenuMobile/>
          },
          {
              path : "dashboard",
              element : <Dashboard/>,
              children : [
                  {
                      path : "profile",
                      element : <Profile/>
                  },
                  {
                      path : "myorders",
                      element : <MyOrders/>
                  },
                  {
                      path : "address",
                      element : <Address/>
                  },
                  {
                      path : 'category',
                      element : <AdminPermision><CategoryPage/></AdminPermision>
                  },
                  {
                      path : "subcategory",
                      element : <AdminPermision><SubCategoryPage/></AdminPermision>
                  },
                  {
                      path : 'upload-product',
                      element : <AdminPermision><UploadProduct/></AdminPermision>
                  },
                  {
                      path : 'product',
                      element : <AdminPermision><ProductAdmin/></AdminPermision>
                  }
              ]
          },
          {
              path : ":category",
              children : [
                  {
                      path : ":subCategory",
                      element : <ProductListPage/>
                  }
              ]
          },
          {
              path : "product/:product",
              element : <ProductDisplayPage/>
          },
          // {
          //     path : 'cart',
          //     element : <CartMobile/>
          // },
          {
              path : "checkout",
              element : <CheckoutPage/>
          },
          {
              path : "success",
              element : <Success/>
          },
          {
              path : 'cancel',
              element : <Cancel/>
          }
      ]
  }
])

export default router;
