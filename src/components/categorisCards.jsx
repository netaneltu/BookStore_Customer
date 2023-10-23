import React from 'react';
import allCategories from '../hooks/allCategoris';
import { Flex, Box, SimpleGrid,Button } from '@chakra-ui/react';

const CategorisCards = () => {

    const categoriesArray = allCategories();


    return (
        <>
        
            <Box  bgImage="url('https://oz-vehadar.net/wp-content/uploads/2023/02/%D7%A9%D7%95%D7%9C%D7%97%D7%9F-%D7%A2%D7%A8%D7%95%D7%9A-3-252100.png')" bgPosition="center"
  bgRepeat="no-repeat" boxSize="200px" >
               <Button>click me</Button> 
            
            </Box>

      
            
        </>
    );
};

export default CategorisCards;