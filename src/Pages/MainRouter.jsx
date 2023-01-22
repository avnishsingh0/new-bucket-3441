import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Home from "./Home";
import { Jawellary } from "./Jawellary";
import Login from "./Login";
import SignIn from "./SignIn";
import SingleProduct from "./SingleProduct";
import { PrivteRoutes } from "../Components/PrivateRoutes";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />;
      <Route path="/signIn" element={<SignIn />} />;
      <Route path="/cart" element={ <PrivteRoutes> <Cart /> </PrivteRoutes>} />;
      <Route path="/checkout" element={ <PrivteRoutes><Checkout /> </PrivteRoutes>} />;
      <Route path="/jawellary" element={<Jawellary />} />;
      <Route path="/login" element={<Login />} />;
      <Route path="/SingleProduct/:id" element={<SingleProduct />} />;
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRouter;
