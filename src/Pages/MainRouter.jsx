import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Home from "./Home";
import { Jawellary } from "./Jawellary";
// import Login from "./Login";
import SingleProduct from "./SingleProduct";
// import PrivteRoutes from "../Components/PrivateRoutes";
import Dashboard from "../Admin/Dashboard";
import Order from "../Admin/Order";
import Multistep from "../Admin/Package";
import Customers from "../Admin/Customers";
import { LoginSignup } from "./LoginSignup";
import { PrivateRoutes } from "../Components/PrivateRoutes";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />;
      <Route
        path="/cart"
        element={
          <PrivateRoutes>
            {" "}
            <Cart />{" "}
          </PrivateRoutes>
        }
      />
      ;
      <Route
        path="/checkout"
        element={
          <PrivateRoutes>
            <Checkout />{" "}
          </PrivateRoutes>
        }
      />
      ;
      <Route path="/jawellary" element={<Jawellary />} />;
      <Route path="/login" element={<LoginSignup />} />;
      <Route path="/SingleProduct/:id" element={<SingleProduct />} />;
      <Route path="*" element={<div>Page Not Found</div>} />
      <Route path="/adminpanel" element={<Dashboard />} />
      <Route path="/adminpanel/package" element={<Multistep />} />
      <Route path="/adminpanel/customers" element={<Customers />} />
      <Route path="/adminpanel/order" element={<Order />} />
    </Routes>
  );
};

export default MainRouter;
