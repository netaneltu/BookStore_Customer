import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";

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
  HStack,
  NumberInputField,
  Flex,
} from "@chakra-ui/react";
import { useEffect } from "react";

const product = () => {
  const { state } = useLocation();
  const [productData, setProductData] = useState({});
  const [qty, setQty] = useState(1);

  const { cartItems, setCartItems } = useContext(CartContext);

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

  const addToCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem._id === item._id
    );

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem._id === item._id) {
          return { ...cartItem, qty: cartItem.qty + qty };
        }
        return cartItem;
      });

      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, qty: qty }]);
    }
  };

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

            <Flex direction={["column","column" ,"column","row"]} >
              <HStack  padding="1em">
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
            </Flex>

            <Text py="2">{productData.product_description}</Text>
          </CardBody>

          <CardFooter>
            <HStack>
              <HStack>
                <ImPlus
                  onClick={() => {
                    if (qty < 20) {
                      setQty(qty + 1);
                    }
                  }}
                />
                <NumberInput value={qty} defaultValue={1} w="5em">
                  <NumberInputField paddingRight="2rem" borderRadius="20px" />
                </NumberInput>
                <ImMinus
                  onClick={() => {
                    if (qty > 1) setQty(qty - 1);
                  }}
                />
              </HStack>
              <Button
                size={["md","lg"]}
                leftIcon={<ImCart />}
                variant="outline"
                colorScheme="black"
                marginRight="2em"
                onClick={() => addToCart(productData)}
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
