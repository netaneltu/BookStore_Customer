import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  ImBarcode,
  ImEnlarge,
  ImBooks,
  ImCart,
  ImMinus,
  ImPlus,
} from "react-icons/im";

import {
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Button,
  Text,
  Image,
  Center,
  NumberInput,
  Box,
  HStack,
  NumberInputField,
} from "@chakra-ui/react";
import { useEffect } from "react";

const product = () => {
  const { state } = useLocation();
  const [productData, setProductData] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProductById = async () => {
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_SERVER_URL
          }/products/customers/product/${state}`
        );
        setProductData(data.product);
      } catch (error) {
        console.log(error);
      }
    };
    getProductById();
  }, []);
  console.log(productData);
  return (
    <Center>
      <Card
        direction={{ base: "column", sm: "row" }}
        variant="outline"
        maxW="4xl"
        mx={4}
        p={3}
        borderRadius={10}
      >
        <Image
          boxSize="400px"
          objectFit="contain"
          src={productData.product_image}
          alt={productData.product_name}
        />

        <Stack>
          <CardBody maxW="2xl">
            <Heading size="lg">{productData.product_name}</Heading>

            <Heading marginBlock="2em" size="lg">
              מחיר: ₪{productData.product_price}
            </Heading>

            <HStack>
              <HStack padding="1em">
                <ImBarcode size="3rem" />
                <Stack spacing="0px">
                  <Text fontWeight="bold">מק"ט</Text>
                  <Text>547211</Text>
                </Stack>
              </HStack>
              <HStack padding="1em">
                <ImEnlarge size="3rem" />
                <Stack spacing="0px">
                  <Text fontWeight="bold">גודל</Text>
                  <Text>20ס"מ</Text>
                </Stack>
              </HStack>
              <HStack padding="1em">
                <ImBooks size="3rem" />
                <Stack spacing="0px">
                  <Text fontWeight="bold">סוג כריכה</Text>
                  <Text>קשה</Text>
                </Stack>
              </HStack>
            </HStack>

            {/* <Text py="2">{productData.product_description}</Text> */}
          </CardBody>

          <CardFooter>
            <HStack>
              <HStack>
                <ImPlus
                  onClick={() => {
                    if (quantity < 20) {
                      setQuantity(quantity + 1);
                      console.log(quantity);
                    }
                  }}
                />
                <NumberInput value={quantity} defaultValue={1} w="5em">
                  <NumberInputField paddingRight="2rem" borderRadius="20px" />
                </NumberInput>
                <ImMinus
                  onClick={() => {
                    if (quantity > 1) setQuantity(quantity - 1);
                    console.log(quantity);
                  }}
                />
              </HStack>
              <Button
                size="lg"
                leftIcon={<ImCart />}
                variant="outline"
                colorScheme="black"
                marginRight="2em"
              >
                הוסף לעגלה
              </Button>
            </HStack>
          </CardFooter>
        </Stack>
      </Card>
    </Center>
  );
};

export default product;
