import React from 'react';
import SaleCarousel from '../components/saleCarousel';
import { Box,Container } from '@chakra-ui/react';
import allProducts from '../hooks/allProducts';
// import CardBuild from '../components/cardBuild';



const home = () => {
  
return(
<Container borderRadius={10} paddingTop="2em" maxW='80%' bg="blackAlpha.100"  h="22em"    >
<SaleCarousel/>
  </Container>


)

  
};

export default home;