import React from "react";
import allCategories from "../hooks/allCategoris";
import { Flex, SimpleGrid, Button, Card, Text } from "@chakra-ui/react";

const CategorisCards = () => {
  const categoriesArray = allCategories();

  return (
    <>
      <SimpleGrid columns={[1, 2, 2, 3]} gap="1rem" margin="5em">
        {categoriesArray.map((category) => {
          return (
            <Card
              minH="20em"
              _hover={{ transform: "scale(0.95)" }}
              backgroundImage={category.category_image}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              borderRadius="1%"
              justifyContent="end"
            >
              <Flex
                flexDirection="column"
                paddingRight="3em"
                paddingBottom="20px"
              >
                <Text fontWeight="bold" fontSize="3xl" color="white">
                  {category.category_name}
                </Text>
                <Button borderRadius="15PX" variant="outline" maxW="8em">
                  קנה עכשיו
                </Button>
              </Flex>
            </Card>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default CategorisCards;
