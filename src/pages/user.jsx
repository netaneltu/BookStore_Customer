import React from "react";

import { Box, Flex } from "@chakra-ui/react";

import Footer from "../components/footer";
import ProductPage from "../components/ProductPage";
import SecondaryNav from "../components/SecondaryNav";
import UserInfo from "../components/userInfo";
// import CardBuild from '../components/cardBuild';

const Product = () => {
  return (
    <>
      <SecondaryNav/>
        <UserInfo/>
     
      <Footer />
    </>
  );
};

export default Product;
