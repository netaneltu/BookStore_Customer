import React from "react";
import Login from "../components/user/login";
import { Helmet } from "react-helmet";

import Footer from "../components/global/footer";
// import CardBuild from '../components/cardBuild';

const login = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Book Store </title>
        <meta name="Log In Page" content="products List" />
      </Helmet>

      <Login />
      <Footer />
    </>
  );
};

export default login;
