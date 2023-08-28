import React, { useEffect, useState, useRef } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  background,
  Flex,
  SimpleGrid ,
  Image,
  Box,
  Stack,
  CardBody,
  CardFooter,
  Heading,
  Card,
  Text,
} from "@chakra-ui/react";
import allCategoris from "../hooks/allCategoris";
import axios from "axios";

const SecondaryNav = () => {
  const timerRef = useRef();
  const categoriesArray = allCategoris();

  const [openMenu, setopenMenu] = useState(null);
  const [categories, setCategoris] = useState(allCategoris());
  const [topProducts, setTopProducts] = useState(allCategoris());

  useEffect(() => {
    const getTopProducts = async () => {
      try {
        console.log("hi");
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_SERVER_URL
          }/categories/customers/products/top/${openMenu}`
        );
        setTopProducts(data.topProducts);
        console.log(data);
        
        
      } catch (error) {
        console.log(error);
      }

    };
    getTopProducts();
  }, [openMenu]);

  const handleMouseEnter = (id) => {
    clearTimeout(timerRef.current);
    timerRef.current = undefined;
    setopenMenu(id);
  };

  const handleMouseLeave = () => {
    timerRef.current = window.setTimeout(() => {
      setopenMenu("");
    }, 200);
  };
  const handleMenuEnterEvent = (id) => {
    clearTimeout(timerRef.current);
    timerRef.current = undefined;
    setopenMenu(id);
  };
  const handleMenuMouseLeave = () => {
    setopenMenu("");
  };
  console.log(topProducts);

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justifyContent="center"
        gap={5}
        padding={4}
        bg="white"
        color="black"
        display={["none", "flex", "flex"]}
        // direction={["row-reverse", "row", "row"]}
        mt={[20, 0, 0]}
      >
        {categoriesArray.map((cat) => {
          return (
            <Menu isOpen={openMenu == cat._id ? true : false} id={cat._id} >
              <MenuButton
                onMouseEnter={() => {
                  handleMouseEnter(cat._id);
                }}
                onMouseLeave={handleMouseLeave}
              >
                {cat.category_name}
              </MenuButton>

              <MenuList
                onMouseEnter={() => {
                  handleMenuEnterEvent(cat._id);
                }}
                onMouseLeave={handleMenuMouseLeave}
                padding='0'
                width="40em"
              >
                <Flex w="40em">
                  
                  <Box width="70%" bg="#5C0505" height="20em">
                    {cat.subcategories.map((c) => {
                      return (
                        <MenuItem color="#DDA773" bg="#5C0505">
                          {c.category_name}
                        </MenuItem>
                      );
                    })}
                  </Box>
                  
                  <Box as="" w="100em">
                    <SimpleGrid columns={2}>
                    {topProducts.map((p)=>{
                      return(
                         <Card
                         direction={{ base: "column", sm: "row" }}
                         overflow="visible "
                         variant="unstyled"
                         p="10%"
                       >
                         <Image
                           boxSize="80px"
                           src={p.product_image}
                          m="10%"
                         />
                         <Stack>
                           <CardBody>
                             <Heading  size="xs">{p.product_name}</Heading>
   
                             <Text margin={3} fontWeight="bold">
                    {` ${p.product_price} ₪`}
                              
                             </Text>
                           </CardBody>
                         </Stack>
                       </Card>
                       )
                    })}
                   
                   </SimpleGrid>
                  </Box>
                </Flex>
              </MenuList>
            </Menu>
          );
        })}
      </Flex>
    </>
  );
};

export default SecondaryNav;
