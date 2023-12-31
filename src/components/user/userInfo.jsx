import React, { useEffect } from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  Center,
  Button,
  Heading,
} from "@chakra-ui/react";
import { AuthContext } from "../../context/AuthContextProvider";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const userInfo = () => {
  const { user, setUser } = useContext(AuthContext);

  const [userData, setUserData] = useState();

  const navigate = useNavigate();

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
  }, [user]);
  const changeUserInfo = () => {
    navigate("/home");
  };

  return (
    <Center>
      {userData && (
        <TableContainer mt="3%" w="90%" size="md">
          <Heading color="gray.600" marginBottom="1em">
            פרטי הלקוח
          </Heading>
          <Table size="lg" variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th>{`${userData.first_name} ${userData.last_name}`}</Th>
                {/* <Th>into</Th>
        <Th isNumeric>multiply by</Th> */}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>שם פרטי</Td>
                <Td>{userData.first_name}</Td>
              </Tr>
              <Tr>
                <Td>שם משפחה</Td>
                <Td>{userData.last_name}</Td>
              </Tr>
              <Tr>
                <Td>מייל</Td>
                <Td>{userData.email}</Td>
              </Tr>
              <Tr>
                <Td>פלאפון</Td>
                <Td>{userData.phone_number}</Td>
              </Tr>
              <Tr>
                <Td>עיר מגורים</Td>
                <Td>{userData.user_address.city}</Td>
              </Tr>
              <Tr>
                <Td>רחוב </Td>
                <Td>{userData.user_address.street}</Td>
              </Tr>
              <Tr>
                <Td>מס בית</Td>
                <Td>{userData.user_address.building}</Td>
              </Tr>
              <Tr>
                <Td>מס דירה</Td>
                <Td>{userData.user_address.appartment}</Td>
              </Tr>
            </Tbody>
          </Table>
          <Button
            onClick={changeUserInfo}
            colorScheme="teal"
            marginTop="2em"
            alignSelf="center"
          >
            עדכן פרטים
          </Button>
        </TableContainer>
      )}
    </Center>
  );
};

export default userInfo;
