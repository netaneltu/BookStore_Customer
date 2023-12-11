import React from "react";
import SaleCarousel from "../components/saleCarousel";
import { Box, Container } from "@chakra-ui/react";
import allProducts from "../hooks/allProducts";
import CategorisCards from "../components/categorisCards";
import SecondaryNav from "../components/global/SecondaryNav";
import { Helmet } from "react-helmet";

import Footer from "../components/global/footer";
// import CardBuild from '../components/cardBuild';

const home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Book Store </title>
        <meta name="Home Page" content="Home Page" />
      </Helmet>

      <SecondaryNav />
      <CategorisCards />
      <Container
        borderRadius={10}
        paddingTop="2em"
        maxW="80%"
        bg="blackAlpha.100"
        h="22em"
      >
        <SaleCarousel />
      </Container>
      <Footer />
    </>
  );
};

export default home;
