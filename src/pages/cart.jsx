import React from "react";
import SecondaryNav from "../components/global/SecondaryNav";
import { Helmet } from "react-helmet";

import Footer from "../components/global/footer";
import Cart from "../components/user/cart";

// import CardBuild from '../components/cardBuild';

const cart = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Book Store </title>
        <meta name="Cart" content="products List" />
      </Helmet>
      <SecondaryNav />

      <Cart />
      <Footer />
    </>
  );
};

export default cart;
