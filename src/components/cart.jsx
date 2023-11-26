import React from "react";
import {
  Center,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  Tfoot,
  Center,
  Button,
} from "@chakra-ui/react";

const cart = () => {
  return (
    <Center>
      <TableContainer mt="3%" w="60%" size="md">
        <Table size="lg" variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>{`${user.first_name} ${user.last_name}`}</Th>
              {/* <Th>into</Th>
        <Th isNumeric>multiply by</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>שם פרטי</Td>
              <Td>{user.first_name}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Center>
  );
};

export default cart;
