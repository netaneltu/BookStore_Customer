import React from "react";
import SaleCarousel from "../components/saleCarousel";
import { Box, Container } from "@chakra-ui/react";
import allProducts from "../hooks/allProducts";
import CategorisCards from "../components/categorisCards";
import Footer from "../components/footer";
// import CardBuild from '../components/cardBuild';

const home = () => {
  return (
    <>
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
