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
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { Navigate, useNavigate } from "react-router-dom";

import { useCookies } from "react-cookie";
import { useState } from "react";
import { useEffect } from "react";

const emailregex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const passwordregex = /^(?=.*[A-Z]).{6,12}$$/;

const login = () => {
  const [enterdName, setEnteredName] = useState("");
  const { user, setUser } = useContext(AuthContext);
  const [enterdPassword, setEnteredPassword] = useState("");
  const [emailIsError, setEmailIsError] = useState(false);
  const [passwordIsError, setPasswordIsErrorr] = useState(false);
  const [message, setMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState();

  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [loading, setLoading] = useState(false);

  // password validation
  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    if (passwordregex.test(enterdPassword)) {
      setPasswordIsErrorr(false);
    }
  };
  const passwordInputBlureHandler = (e) => {
    setEnteredPassword(e.target.value);
    setPasswordIsErrorr(!passwordregex.test(enterdPassword));
  };

  //
  // Email Validation
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (emailregex.test(enterdName)) {
      setEmailIsError(false);
    }
  };

  const nameInputBlureHandler = (e) => {
    setEnteredName(e.target.value);
    setEmailIsError(!emailregex.test(enterdName));
  };

  useEffect(() => {
    if (emailIsError) {
      setMessage("אנא הזן מייל תקני");
      setMessageStatus("error");
    } else if (passwordIsError) {
      setMessage(
        " אנא הכנס סיסמא תקינה באורך 6-12 תווים המכילה לפחות אות גדולה אות קטנה ומספר"
      );
      setMessageStatus("error");
    } else {
      setMessage("");
    }
  }, [emailIsError, passwordIsError]);

  const submithandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    setEnteredName(email.value);
    setEnteredPassword(password.value);
    setEmailIsError(!emailregex.test(enterdName));
    try {
      if (emailIsError) {
        setMessage("אנא הזן מייל תקני");
        setMessageStatus("error");

        return;
      }

      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/users/customers/login`,
        {
          email: enterdName,
          password: enterdPassword,
        }
      );
      const data = response.data;

      // setLoggedUser(data.user);
      setMessage("כניסה אושרה");
      setMessageStatus("success");
      setTimeout(() => {
        setCookie("token", data.access_token, { path: "/", maxAge: 10800 });
      }, 2000);
    } catch (error) {
      console.log(error);
      setMessage("אימייל או סיסמא לא נכונים");
      setMessageStatus("error");
    } finally {
      setLoading(false);
    }
  };
  if (user) {
    return <Navigate to="/home" replace={true} />;
  }

  return (
    <>
      <Container borderRadius={20} mt={20} p={15}>
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
            <Heading>כניסה</Heading>
            <Text>
              אם אין לך חשבון{" "}
              <Link href="/register" fontWeight="semibold">
                הירשם כאן
              </Link>
            </Text>
          </VStack>
          <FormControl>
            <form onSubmit={submithandler}>
              <SimpleGrid rowGap={6} w="full">
                <GridItem colSpan={2}>
                  <FormLabel>מייל</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    onBlur={nameInputBlureHandler}
                    onChange={nameInputChangeHandler}
                    variant="filled"
                    placeholder="israel@gmail.com"
                    isInvalid={emailIsError}
                  />
                </GridItem>
                <GridItem colSpan={2}>
                  <FormLabel>סיסמא</FormLabel>
                  <Input
                    type="password"
                    id="password"
                    onBlur={passwordInputBlureHandler}
                    onChange={passwordInputChangeHandler}
                    variant="filled"
                    placeholder="israeli"
                    isInvalid={passwordIsError}
                  />
                </GridItem>
                <GridItem align="center" colSpan={2}>
                  <Button bg="white" type="submit">
                    כניסה
                  </Button>
                </GridItem>
                {/* {(emailIsError || passwordIsError || Error) && (
                <Text fontSize="md" color="red">
                  {message}
                </Text>
              )} */}
                {message && (
                  <Alert width="100%" status={messageStatus}>
                    <AlertIcon />
                    {message}
                  </Alert>
                )}
                <GridItem colSpan={2}>
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
                </GridItem>
              </SimpleGrid>
            </form>
          </FormControl>
          <VStack>
            <Text>
              מנהל?{" "}
              <Link
                href="https://book-store-c7d27.firebaseapp.com"
                fontWeight="semibold"
              >
                היכנס כאן
              </Link>
            </Text>
          </VStack>
        </VStack>
      </Container>
    </>
  );
};

export default login;
