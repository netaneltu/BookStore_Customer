import React from "react";
import { useLocation } from "react-router-dom";


import allProducts from "../hooks/allProducts";
import {
  Card,
  CardBody,
  SimpleGrid,
  Stack,
  Image,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";

const ProductCard = () => {
  const { state } = useLocation();

  return (
    <Stack>
      <Heading size={["md","md","xl"]}  color="#94530D" pt="1em" alignSelf="center">{`▻ ${state} ◅`}</Heading>
    <SimpleGrid columns={[1, 2, 3, 4]} gap="1rem" margin="5em">
      {allProducts().map((product) => {
        return (
          <Card maxW="sm" key={product._id}>
            <CardBody>
              <Stack>
                <Image
                  boxSize="10em"
                  component="img"
                  alt={product.product_name}
                  src={product.product_image}
                  _hover={{ transform: "scale(1.2)" }}
                  alignSelf="center"
                />

                <Heading size="md">{product.product_name}</Heading>
                <Text as="b">{` ${product.product_price} ₪`}</Text>
              </Stack>
            </CardBody>

            <Button
              alignSelf="center"
              maxW="30%"
              size="md"
              borderColor="#E8DBC9"
              variant="outline"
              margin="1em"
              colorScheme="orange"
            >
              קנה עכשיו
            </Button>
          </Card>
        );
      })}
    </SimpleGrid>
    </Stack>
  );
};

export default ProductCard;