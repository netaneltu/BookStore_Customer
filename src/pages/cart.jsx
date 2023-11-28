import React from "react";
import SecondaryNav from "../components/SecondaryNav";

import Footer from "../components/footer";
import Cart from "../components/cart";
// import CardBuild from '../components/cardBuild';

const cart = () => {
  return (
    <>
      <SecondaryNav />

      <Cart />
      <Footer />
    </>
  );
};

export default cart;
