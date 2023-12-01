import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Button,
  Spinner,
  Link,
  Container,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../global/footer";

import { useCookies } from "react-cookie";
import { useState } from "react";
import { useEffect } from "react";

const emailregex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const passwordregex = /^(?=.*[A-Z]).{6,12}$$/;

const register = () => {
  const { user, setUser } = useContext(AuthContext);
  const [emailIsError, setEmailIsError] = useState(false);
  const [passwordIsError, setPasswordIsErrorr] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    city: "",
    street: "",
    building: "",
    apartment: "",
    phone_number: "",
  });

  // password validation
  const passwordInputChangeHandler = (event) => {
    handleChangeInput(event);
    if (passwordregex.test(event.target.value)) {
      setPasswordIsErrorr(false);
    }
  };
  const passwordInputBlureHandler = (e) => {
    setPasswordIsErrorr(!passwordregex.test(values.password));
  };

  //
  // Email Validation
  const nameInputChangeHandler = (event) => {
    handleChangeInput(event);
    if (emailregex.test(event.target.value)) {
      setEmailIsError(false);
    }
  };

  const nameInputBlureHandler = (e) => {
    handleChangeInput(e);
    setEmailIsError(!emailregex.test(values.email));
  };

  //updating values
  const handleChangeInput = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    if (emailIsError) {
      setMessage("Please enter a valid email");
    } else if (passwordIsError) {
      setMessage(
        "אנא הכנס סיסמא תקינה באורך 6-12 תווים המכילה לפחות אות גדולה אות קטנה ומספר"
      );
    } else {
      setMessage("");
    }
  }, [emailIsError, passwordIsError]);

  const submithandler = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/users/customers/register`,
        {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          password: values.password,
          user_address: {
            city: values.city,
            street: values.street,
            building: values.building,
            apartment: values.apartment,
          },
          phone_number: values.phone_number,
        }
      );
      const data = response.data;
      // setLoggedUser(data.user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  if (user) {
    return <Navigate to="/home" replace={true} />;
  }

  return (
    <>
      <Container maxW="3xl" w="100%" borderRadius={20} mt={20} p={15}>
        <VStack
          rowGap={5}
          borderRadius={20}
          w="90%"
          h="90%"
          bg="#E8DBC9"
          alignItems="self-center"
          p={10}
        >
          <VStack>
            <Heading>הרשמה</Heading>
            <Text>
              אם יש לך חשבון{" "}
              <Link href="/login" fontWeight="semibold">
                היכנס כאן
              </Link>
            </Text>
          </VStack>

          <form onSubmit={submithandler}>
            <SimpleGrid columns={2} columnGap={4} rowGap={5} w="full">
              <GridItem colSpan={[2, 1]}>
                <FormControl isRequired>
                  <FormLabel>שם פרטי</FormLabel>
                  <Input
                    type="text"
                    id="first_name"
                    // onBlur={nameInputBlureHandler}
                    onChange={handleChangeInput}
                    variant="filled"
                    placeholder="ישראל "
                    // isInvalid={emailIsError}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={[2, 1]}>
                <FormControl isRequired>
                  <FormLabel>שם משפחה</FormLabel>
                  <Input
                    type="text"
                    id="last_name"
                    // onBlur={nameInputBlureHandler}
                    onChange={handleChangeInput}
                    variant="filled"
                    placeholder=" ישראלי"
                    // isInvalid={emailIsError}
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={[2, 1]}>
                <FormControl isRequired>
                  <FormLabel isRequired>מייל</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    onBlur={nameInputBlureHandler}
                    onChange={nameInputChangeHandler}
                    variant="filled"
                    placeholder="israel@gmail.com"
                    isInvalid={emailIsError}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={[2, 1]}>
                <FormControl isRequired>
                  <FormLabel>סיסמא</FormLabel>
                  <Input
                    type="password"
                    id="password"
                    onBlur={passwordInputBlureHandler}
                    onChange={passwordInputChangeHandler}
                    variant="filled"
                    placeholder=""
                    isInvalid={passwordIsError}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={[2, 1]}>
                <FormControl isRequired>
                  <FormLabel> מספר פלאפון</FormLabel>
                  <Input
                    type="number"
                    id="phone_number"
                    onChange={handleChangeInput}
                    variant="filled"
                    placeholder=" ישראלי"
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={[2, 1]}>
                <Heading size="md"> כתובת מגורים</Heading>
              </GridItem>

              <GridItem colSpan={[2, 1]}>
                <FormControl isRequired>
                  <FormLabel>עיר</FormLabel>
                  <Input
                    type="text"
                    id="city"
                    onChange={handleChangeInput}
                    variant="filled"
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={[2, 1]}>
                <FormControl isRequired>
                  <FormLabel>רחוב</FormLabel>
                  <Input
                    type="text"
                    id="street"
                    onChange={handleChangeInput}
                    variant="filled"
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={[2, 1]}>
                <FormControl isRequired>
                  <FormLabel>מספר בית</FormLabel>
                  <Input
                    type="number"
                    id="building"
                    onChange={handleChangeInput}
                    variant="filled"
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={[2, 1]}>
                <FormControl>
                  <FormLabel>מספר דירה (אופציונלי)</FormLabel>
                  <Input
                    type="text"
                    id="apartment"
                    onChange={handleChangeInput}
                    variant="filled"
                  />
                </FormControl>
              </GridItem>
              <GridItem align="center" colSpan={[2, 1]}>
                <Button bg="white" type="submit">
                  הרשמה
                </Button>
              </GridItem>
              {(emailIsError || passwordIsError || Error) && (
                <Text fontSize="md" color="red">
                  {message}
                </Text>
              )}
              {loading && (
                <Spinner
                  alignSelf="center"
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="md"
                />
              )}
              {/* <LoginButton>log in</LoginButton> */}
            </SimpleGrid>
          </form>
        </VStack>
      </Container>
      <Footer />
    </>
  );
};

export default register;
