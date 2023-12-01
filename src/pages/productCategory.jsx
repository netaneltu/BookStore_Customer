import React from "react";
import { Box,Flex  } from "@chakra-ui/react";
import SideBar from "../components/sideBar";
import ProductCard from "../components/productsCards";
import Footer from "../components/global/footer";
import { Helmet } from "react-helmet";

// import CardBuild from '../components/cardBuild';

const ProductCategory = () => {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Book Store </title>
        <meta name="description" content="products List" />
      </Helmet>
    
     <Flex columns={2}  >
      <SideBar/>
      <ProductCard/>
      </Flex>
      <Footer />
    </>
  );
};

export default ProductCategory;
