import React, { useEffect, useState, useRef } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  SimpleGrid,
  Image,
  Box,
  Stack,
  CardBody,
  Heading,
  Card,
  Link,
  Text,
  Button,
} from "@chakra-ui/react";
import allCategories from "../../hooks/allCategoris";
import { ImMenu, ImCross } from "react-icons/im";

import { useNavigate } from "react-router-dom";

const SecondaryNav = () => {
  const timerRef = useRef();
  const navigate = useNavigate();
  const categoriesArray = allCategories();

  const [openMenu, setopenMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = (id) => {
    clearTimeout(timerRef.current);
    timerRef.current = undefined;
    setopenMenu(id);
  };

  const navigateToProduct = (p) => {
    navigate("/product", { state: p._id });
  };

  const handleMouseLeave = () => {
    timerRef.current = window.setTimeout(() => {
      setopenMenu("");
    }, 200);
  };
  const handleMenuEnterEvent = (id) => {
    clearTimeout(timerRef.current);
    timerRef.current = undefined;
    setopenMenu(id);
  };
  const handleMenuMouseLeave = () => {
    setopenMenu("");
  };

  return (
    <>
      <Box
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        color="black"
        fontSize={50}
        top="5em"
        display={["flex", "none", "none"]}
      >
        {isOpen ? <ImCross /> : <ImMenu />}
      </Box>
      <Flex
        as="nav"
        align="center"
        justifyContent="center"
        gap={5}
        padding={4}
        bg="white"
        color="black"
        display={[isOpen ? "flex" : "none", "flex"]}
        direction={[isOpen ? "column" : "row"]}
        // direction={["row-reverse", "row", "row"]}
        mt={[20, 0, 0]}
      >
        {categoriesArray.map((cat) => {
          return (
            <Menu isOpen={openMenu == cat._id ? true : false} id={cat._id}>
              <MenuButton
                color="#94530D"
                onClick={() => {
                  navigate("/productCategory", {
                    state: {
                      category: cat.category_name,
                      data: cat,
                      heading: cat.category_name,
                    },
                  });
                }}
                onMouseEnter={() => {
                  handleMouseEnter(cat._id);
                }}
                onMouseLeave={handleMouseLeave}
              >
                <Heading size="md">{cat.category_name}</Heading>
              </MenuButton>

              <MenuList
                onMouseEnter={() => {
                  handleMenuEnterEvent(cat._id);
                }}
                onMouseLeave={handleMenuMouseLeave}
                padding="0"
                width="40em"
              >
                <Flex w="40em">
                  <Box width="100%" bg="#5C0505" height="20em">
                    {cat.subcategories.map((c) => {
                      return (
                        <MenuItem
                          onClick={() => {
                            navigate("/productCategory", {
                              state: {
                                data: c,
                                heading: c.category_name,
                                category: cat.category_name,
                              },
                            });
                          }}
                          color="#DDA773"
                          bg="#5C0505"
                        >
                          {c.category_name}
                        </MenuItem>
                      );
                    })}
                  </Box>

                  <Box as="" w="100em">
                    <SimpleGrid columns={2}>
                      {cat.top_products.map((p) => {
                        return (
                          <Card
                            direction={{ base: "column", sm: "row" }}
                            overflow="visible "
                            variant="unstyled"
                            p="10%"
                            onClick={() => {
                              navigateToProduct(p);
                            }}
                          >
                            <Image
                              boxSize="80px"
                              src={p.product_image}
                              m="10%"
                            />
                            <Stack>
                              <CardBody>
                                <Heading size="xs">{p.product_name}</Heading>

                                <Text margin={3} fontWeight="bold">
                                  {` ${p.product_price} ₪`}
                                </Text>
                              </CardBody>
                            </Stack>
                          </Card>
                        );
                      })}
                    </SimpleGrid>
                  </Box>
                </Flex>
              </MenuList>
            </Menu>
          );
        })}
      </Flex>
    </>
  );
};

export default SecondaryNav;
