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
} from "@chakra-ui/react";
import { CartContext } from "../context/CartContext";
import { useState, useContext } from "react";
import { useEffect } from "react";

const cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [sumPrice, setSumPrice] = useState(0);

  useEffect(()=>{
    cartItems.map((cartItem)=>{
        return (setSumPrice(prev=> prev + cartItem.product_price))
    })
  },[])

  const setOrder= async()=>{
    try {
      const response = await axios.post( 
      `${
        import.meta.env.VITE_SERVER_URL
      }/users/customers/get_by_id/64955822d0a87d860970b67d`
    );
    setUserData(data.user)
    console.log(data);
      
    } catch (error) {
      
    }

    alert("Your order has been placed")
  }

  console.log(cartItems);
  console.log(sumPrice);

  return (
    <Center>
      <TableContainer mt="3%" w="60%" size="md">
        <Table size="lg" variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>שם המוצר</Th>
              <Th>כמות </Th>
              <Th>מחיר ליחידה </Th>
            </Tr>
          </Thead>
          <Tbody paddingInline="2px">
            {cartItems.map((cartItem, index) => {
              return (
                <Tr>
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
        <Button onClick={setOrder} colorScheme='teal'  marginTop="2em" alignSelf="center">בצע הזמנה</Button>

      </TableContainer>
    </Center>
  );
};

export default cart;
