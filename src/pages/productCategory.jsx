import React from "react";
import { Box,Flex  } from "@chakra-ui/react";
import SideBar from "../components/sideBar";
import Footer from "../components/footer";
// import CardBuild from '../components/cardBuild';

const productCategory = () => {
  return (
    <>
    
     <Flex columns={2}  >
      <SideBar/>
      <Box w="100px" h="400px" bgColor="red"></Box>
      </Flex>
      <Footer />
    </>
  );
};

export default productCategory;
