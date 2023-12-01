import React from "react";

import { Helmet } from "react-helmet";

import Footer from "../components/global/footer";
import SecondaryNav from "../components/global/SecondaryNav";
import UserInfo from "../components/user/userInfo";

// import CardBuild from '../components/cardBuild';

const Product = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Book Store</title>
        <meta name="User Data" content="User Data" />
      </Helmet>
      <SecondaryNav />
      <UserInfo />

      <Footer />
    </>
  );
};

export default Product;
