import React from "react";
import { Box,Flex  } from "@chakra-ui/react";
import SideBar from "../components/sideBar";
import ProductCard from "../components/productCard";
import Footer from "../components/footer";
// import CardBuild from '../components/cardBuild';

const ProductCategory = () => {
  return (
    <>
    
     <Flex columns={2}  >
      <SideBar/>
      <ProductCard/>
      </Flex>
      <Footer />
    </>
  );
};

export default ProductCategory;
