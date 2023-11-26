import {
  Box,
  Flex,
  Text,
  Link,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { ImMenu } from "react-icons/im";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContextProvider";
import { useCookies } from "react-cookie";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillPersonFill, BsEnvelopeAtFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { Link as rl } from "react-router-dom";
import login from "../pages/login";

const Nav = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  console.log(user);

  // const { manager, setManager } = useContext(AuthContext);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const [isOpen, setIsOpen] = useState(false);
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
console.log(cookies);
  
  const handleLogout = async (e) => {
  
    try {
      const  response  = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/users/customers/logout`,
      );
      location.reload()
      
      

      removeCookie("token");
      setManager(null);
    } catch (error) {
      console.log(error);
      // toast.error(error.response.data.error, {
      //   position: "top-center",
      //   autoClose: 2000,
      //   theme: "light",
      // });
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
        // display={["flex", "flex", "flex"]}
        direction={["column", "row", "row"]}
        // mt={[20, 0, 0]}
      >
        <Box as={rl} to="/home" justifyContent="center" boxSize="5rem">
          <Image src="../../public/open-book.png" />
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

        <Box as={rl} to="/cart">
          <AiOutlineShoppingCart
            color="black"
            size="2rem"
          ></AiOutlineShoppingCart>
        </Box>
        <Box as={rl} to="/mail">
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
    </div>
  );
};

export default Nav;
