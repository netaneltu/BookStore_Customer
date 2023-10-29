import React from "react";
import allCategories from "../hooks/allCategoris";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const sideBar = () => {
  const categoriesArray = allCategories();
  const { state } = useLocation();

  console.log(categoriesArray);
  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w="200px"
      direction="column"
    >
      {categoriesArray.map((cat) => {
        return (
          <>
            <Heading padding="5px" size="md">
              {cat.category_name}
            </Heading>
            {state === cat.category_name
              ? cat.subcategories.map((subCat) => {
                  return (
                    <Text paddingRight="20px">{subCat.category_name}</Text>
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
