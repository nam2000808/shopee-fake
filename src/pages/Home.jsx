import React from "react";

import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Coupon from "../components/Coupon";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Coupon />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
