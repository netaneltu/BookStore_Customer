import React from 'react';
import { Container, Flex,Box, Heading,Link,Input,Stack, Button } from "@chakra-ui/react";


const Footer = () => {
    return (
        <Container  borderRadius="10px" marginBottom="10em" marginTop="5em" maxW='90%'  h="20em" bgColor="#E8DBC9">
            <Flex gap="6em" justifyContent="center">
                <Box display='flex'  flexDirection="column">
                    <Heading size='md'>צור קשר</Heading>
                    <Link>כתובת: הנחלים 352,יד-בנימין</Link>
                    <Link>📞 052-4669864</Link>
                    <Link>✉ mail@gmail.com </Link>
                </Box>
                <Box display='flex'  flexDirection="column">
                    <Heading size='md'>ניווט באתר</Heading>
                    <Link>דף הבית</Link>
                    <Link>איזור אישי</Link>
                    <Link>צור קשר</Link>
                </Box>
                
                <Box backgroundImage="url(../../public/output-onlinepngtools.png) "  mt="-2em" w="400px" h="400px" p="10px" bgColor="brown">
        
                   <Box display='flex' alignItems="center" justifyContent="center"  borderWidth="2px" borderColor="white" h="99%"  >
                   <Stack spacing={3}>
                    <Heading color="white" size='md'>הרשמה לעדכונים</Heading>
                    <Input  _placeholder={{ color: 'white' }} variant='flushed' color="black" placeholder='שם' />
                    <Input _placeholder={{ color: 'white' }} variant='flushed' placeholder='אימייל' />
                    <Button textColor="white" variant='outline' mt={2} type="submit">שליחה</Button>
                    </Stack>
                   </Box>
                </Box>
            </Flex>
        </Container>
    );
};

export default Footer;