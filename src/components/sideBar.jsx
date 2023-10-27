import React from "react";
import allCategories from "../hooks/allCategoris";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const sideBar = () => {
  const categoriesArray = allCategories();
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
            <Heading size="md">{cat.category_name}</Heading>
            if()
            {cat.subcategories.map((subCat) => {
              return <Text>{subCat.category_name}</Text>;
            })}
          </>
        );
      })}
    </Flex>
  );
};

export default sideBar;
