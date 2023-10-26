import React from 'react';
import allCategories from '../hooks/allCategoris';
import { Flex, Box, SimpleGrid,Button,Card,Image,Text } from '@chakra-ui/react';
import { CardMedia } from '@mui/material';
import { blue } from '@mui/material/colors';
import { transform } from 'lodash';
import { Scale } from '@mui/icons-material';

const CategorisCards = () => {

    const categoriesArray = allCategories();

    return (
        <>
          <SimpleGrid columns={[1,2,2,3]} gap="1rem"  >
        {categoriesArray.map((category)=>{
return(
 <Card minH="20em"
_hover={{transform:"scale(0.95)"}}
  backgroundImage={category.category_image}
 backgroundPosition="center"
 backgroundRepeat="no-repeat"
 backgroundSize= "cover" 
 borderRadius="1%"
 justifyContent="end"
 


 >
  <Flex flexDirection="column"  paddingRight="3em" paddingBottom="20px"  >
  <Text fontWeight="bold" fontSize='3xl' color="white" >{category.category_name}</Text>
 <Button borderRadius="15PX" variant='outline' maxW="8em">קנה עכשיו</Button>
  </Flex>
 </Card>
    // <CardMedia
    //   component="img"
    //   alt={category.category_name}
    //   sx={{ minHeight:"8em" ,padding: "0em 4em 0 4em", objectFit: "fill" }}
    //   image={category.category_image}
    // />
    // {/* <CardContent>
    //   <Typography gutterBottom variant="subtitle1" component="div">
    //     {category.category_name}
    //   </Typography>
      
    // </CardContent> */}
    // {/* <CardActions className="parentFlexSplit" disableSpacing>
    //   <Button color="primary" size="medium" variant="outlined">
    //     קנו עכשיו
    //   </Button>
    // </CardActions> */}
  
)
        })}
       
       </SimpleGrid>
  
      
            
        </>
    );
};

export default CategorisCards;