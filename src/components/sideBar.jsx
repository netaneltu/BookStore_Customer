import React from "react";
import allCategories from "../hooks/allCategoris";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {  useState } from "react";
import { ImMenu,ImCross } from "react-icons/im";




const sideBar = () => {
  const categoriesArray = allCategories();
  const { state} = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  


  return (
    <Stack >
    <Box
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          color="black"
          fontSize={50}
          top="5em"
          display={["flex", "none", "none"]}
        >
         {isOpen?<ImCross/>:<ImMenu />}  
          </Box>
    <Flex
    display={[isOpen ? "flex" : "none", "flex"]}
      pos="sticky"
      top={isOpen?"10em":null}
      left="5"
      h="95vh"
    //   marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w="200px"
      direction="column"
      bg="#E8DBC9"
    >
      
      {categoriesArray.map((cat) => {
        return (
          <>
          
            <Heading alignSelf="start"  as="button"
              onClick={() => {
                navigate("/productCategory", {
                  state:{category:cat.category_name,heading:cat}
                });
              }}
            padding="5px" size="sm">
              {cat.category_name}
            </Heading>
            {state.category === cat.category_name
              ? cat.subcategories.map((subCat) => {
                  return (<>
                    <Text onClick={ ()=>{navigate("/productCategory", {state:{category:cat.category_name,heading:subCat}});}} 
                  alignSelf="start"  as="button" paddingRight="20px">⫸{subCat.category_name}</Text>
                    </>
                  );
                })
              : null}
          </>
        );
      })}
    </Flex>
    </Stack>
  );
};

export default sideBar;
