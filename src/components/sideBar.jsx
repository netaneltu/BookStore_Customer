import React from "react";
import allCategories from "../hooks/allCategoris";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const sideBar = () => {
  const categoriesArray = allCategories();
  const { state } = useLocation();
  const navigate = useNavigate();


  console.log(categoriesArray);
  return (
    <Flex
      pos="sticky"
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
                  state: cat.category_name,
                });
              }}
            padding="5px" size="sm">
              {cat.category_name}
            </Heading>
            {state === cat.category_name
              ? cat.subcategories.map((subCat) => {
                  return (<>
                    <Text alignSelf="start"  as="button" paddingRight="20px">⫸{subCat.category_name}</Text>
                    </>
                  );
                })
              : null}
          </>
        );
      })}
    </Flex>
  );
};

export default sideBar;
