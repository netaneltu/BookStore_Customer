import React from "react";

import { Box, Flex } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

import Footer from "../components/global/footer";
import ProductPage from "../components/ProductPage";
import SecondaryNav from "../components/global/SecondaryNav";
// import CardBuild from '../components/cardBuild';

const Product = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Book Store </title>
        <meta name="Product page" content="Product page" />
      </Helmet>

      <SecondaryNav />
      <ProductPage />

      <Footer />
    </>
  );
};

export default Product;
