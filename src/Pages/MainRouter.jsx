import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminHome from "../Admin/AdminHome";
import Blog from "../Admin/Blog";
// import Ahome from "../Admin/Ahome";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Home from "./Home";
import { Jawellary } from "./Jawellary";
import Login from "./Login";
import SignIn from "./SignIn";
import SingleProduct from "./SingleProduct";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />;
      <Route path="/signIn" element={<SignIn />} />;
      <Route path="/cart" element={<Cart />} />;
      <Route path="/checkout" element={<Checkout />} />;
      <Route path="/jawellary" element={<Jawellary />} />;
      <Route path="/login" element={<Login/>} />;
      {/* <Route path="/admin" element={< Ahome/>} />; */}
      <Route path="/SingleProduct/:id" element={<SingleProduct />} />;
      <Route path="*" element={<div>Page Not Found</div>} />
      <Route path='/adminpanel' element={<AdminHome/>}/>
      <Route path="/adminpanel/blog" element={<Blog/>}/>
    </Routes>
  );
};

export default MainRouter;
