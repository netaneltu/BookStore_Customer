import {
  Box,
  Flex,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import logo from "../../../public/open-book.png"
import { AuthContext } from "../../context/AuthContextProvider";
import { useCookies } from "react-cookie";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillPersonFill, BsEnvelopeAtFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { Link as rl } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  // const { manager, setManager } = useContext(AuthContext);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const [searchValue, setSearchValue] = useState("");

  const handleSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/products/customers/search`,
        {
          params: { searchInput: searchValue },
        }
      );

      navigate("/productCategory", {
        state: { data: data, heading: `תוצאות חיפוש: ${searchValue}` },
      });
      setSearchValue("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async (e) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/users/customers/logout`
      );
      location.reload();

      removeCookie("token");
      setManager(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Flex
        as="nav"
        align="center"
        justifyContent="center"
        gap={5}
        padding={4}
        bg="#E8DBC9"
        color="white"
        w="100%"
        direction={["column", "row", "row"]}
      >
        <Box as={rl} to="/home" justifyContent="center" boxSize="5rem">
          <Image src={logo} />
        </Box>
        <Box w={["90%", " 30%"]} maxW="30rem">
          <InputGroup>
            <Input
              borderColor="gray.800"
              borderWidth={1}
              borderRadius={30}
              color="black"
              p={7}
              placeholder="מה תרצו לקנות היום?"
              onChange={handleSearchInput}
              value={searchValue}
            />
            <InputLeftElement>
              <Box mt="5" ml="5" as="button">
                <BiSearchAlt
                  onClick={handleSearch}
                  type="submit"
                  color="black"
                  size="2rem"
                ></BiSearchAlt>
              </Box>
            </InputLeftElement>
          </InputGroup>
        </Box>
        <Flex gap={5}>
          <Box as={rl} to="/cart">
            <AiOutlineShoppingCart
              color="black"
              size="2rem"
            ></AiOutlineShoppingCart>
          </Box>
          <Box as={rl} to="/home">
            <BsEnvelopeAtFill color="black" size="2rem"></BsEnvelopeAtFill>
          </Box>
          {user ? (
            <Box as={rl} to="/user">
              <BsFillPersonFill color="black" size="2rem"></BsFillPersonFill>
            </Box>
          ) : (
            <Button
              variant="outline"
              borderColor="black"
              color="black"
              as={rl}
              to="/login"
            >
              כניסה
            </Button>
          )}

          {user && (
            <Button
              onClick={handleLogout}
              variant="outline"
              borderColor="black"
              color="black"
            >
              התנתק
            </Button>
          )}
        </Flex>
      </Flex>
    </div>
  );
};

export default Nav;
