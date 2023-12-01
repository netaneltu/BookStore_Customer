import React from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Link,
  Input,
  Stack,
  Button,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

const Footer = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleChangeInput = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const submithandler = async (e) => {
    e.target.reset()
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/users/customers/newsletter`,
        {
          name: values.name,
          email: values.email,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      borderRadius="10px"
      marginBottom="10em"
      marginTop="5em"
      maxW="90%"
      h="full"
      bgColor="#E8DBC9"
    >
      <Flex direction={["column", "row"]} gap="6em" justifyContent="center">
        <Box display="flex" flexDirection="column">
          <Heading pt="1em" size="md">
            צור קשר
          </Heading>
          <Text as="b">כתובת: הנחלים 352,יד-בנימין</Text>
          <Text as="b">📞 052-4669864</Text>
          <Text as="b">✉ mail@gmail.com </Text>
        </Box>
        <Box display="flex" flexDirection="column">
          <Heading pt="1em" size="md">
            ניווט באתר
          </Heading>
          <Link href="/home">דף הבית</Link>
          <Link href="/user">איזור אישי</Link>
          <Link href="/home">צור קשר</Link>
        </Box>

        <Box
          backgroundImage="url(../../public/output-onlinepngtools.png) "
          mt="-2em"
          w="400px"
          h="400px"
          p="10px"
          bgColor="brown"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderWidth="2px"
            borderColor="white"
            h="99%"
          >
            <form onSubmit={submithandler}>
              <Stack spacing={3}>
                <Heading color="white" size="md">
                  הרשמה לעדכונים
                </Heading>
                <Input
                  onChange={handleChangeInput}
                  id="name"
                  _placeholder={{ color: "white" }}
                  variant="flushed"
                  color="black"
                  placeholder="שם"
                />
                <Input
                  onChange={handleChangeInput}
                  id="email"
                  _placeholder={{ color: "white" }}
                  variant="flushed"
                  placeholder="אימייל"
                />
                <Button
                  textColor="white"
                  variant="outline"
                  mt={2}
                  type="submit"
                >
                  שליחה
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Footer;
