import React from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  Tfoot,
  Center,
  Heading,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContextProvider";
import axios from "axios";

import { useState, useContext } from "react";
import { useEffect } from "react";

const cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [sumPrice, setSumPrice] = useState(0);
  const { user, setUser } = useContext(AuthContext);

  const [userData, setUserData] = useState();
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/users/customers/get_by_id/${
            user._id
          }`
        );
        setUserData(data.user);
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, []);

  useEffect(() => {
    const sumPrice = cartItems.reduce(
      (total, item) => total + item.qty * item.product_price,
      0
    );

    setSumPrice(sumPrice);
  }, []);

  const deleteCart = () => {
    setCartItems([]);
    setSumPrice(0);
  };

  const setOrder = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/orders/add`,
        {
          user: userData._id,
          customer_details: {
            customer_name: userData.first_name,
            customer_email: userData.email,
            customer_phone: userData.phone_number,
            customer_address: {
              city: userData.user_address.city,
              street: userData.user_address.street,
              building: userData.user_address.building,
            },
          },
          products: cartItems.map((pr) => {
            return {
              product: pr._id,
              RTP: pr.product_price,
              quantity: pr.qty,
            };
          }),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Center>
      <TableContainer mt="3%" w="90%" size="md">
        <Table size="lg" variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>שם המוצר</Th>
              <Th>כמות </Th>
              <Th>מחיר ליחידה </Th>
            </Tr>
          </Thead>
          <Tbody paddingInline="2px">
            {cartItems.map((cartItem) => {
              return (
                <Tr id={cartItem._id}>
                  <Td>{cartItem.product_name}</Td>
                  <Td>{cartItem.qty}</Td>
                  <Td>{cartItem.product_price}</Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>מחיר כולל</Th>
              <Th></Th>
              <Th isNumeric>{sumPrice}₪</Th>
            </Tr>
          </Tfoot>
        </Table>
        <Flex>
          <Button
            onClick={setOrder}
            colorScheme="teal"
            marginTop="2em"
            alignSelf="center"
          >
            בצע הזמנה
          </Button>
          <Spacer />
          <Button
            onClick={deleteCart}
            colorScheme="red"
            marginTop="2em"
            alignSelf="center"
          >
            מחק עגלה
          </Button>
        </Flex>
      </TableContainer>
    </Center>
  );
};

export default cart;
