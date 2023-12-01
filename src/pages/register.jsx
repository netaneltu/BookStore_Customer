import React from "react";
import Register from "../components/user/register";
import { Helmet } from "react-helmet";

import Footer from "../components/global/footer";

const register = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Book Store</title>
        <meta name="Register  Page " content="Register  Page " />
      </Helmet>

      <Register />
      <Footer />
    </>
  );
};

export default register;
