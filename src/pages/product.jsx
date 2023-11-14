import React from "react";

import { Box, Flex } from "@chakra-ui/react";

import Footer from "../components/footer";
import ProductPage from "../components/ProductPage";
import SecondaryNav from "../components/SecondaryNav";
// import CardBuild from '../components/cardBuild';

const Product = () => {
  return (
    <>
      <SecondaryNav/>
        <ProductPage/>
     
      <Footer />
    </>
  );
};

export default Product;
