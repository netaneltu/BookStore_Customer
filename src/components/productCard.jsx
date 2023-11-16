import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import allProducts from "../hooks/allProducts";
import {
  Card,
  CardBody,
  SimpleGrid,
  Stack,
  Image,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";

const ProductCard = () => {
  const navigate = useNavigate();

  const allProductsAray = allProducts();
  const { state } = useLocation();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [header, setHeader] = useState(state.heading.category_name);


  const category = state.heading;
  const searchResulteId=state.searchResulteId.products
  console.log(searchResulteId);

  useEffect(() => {
    const filteringProducts = () => {
      setFilteredProducts(
        allProductsAray.filter((product) => {
          if (category.subcategories) {
            for (let j = 0; j < product.categories.length; j++) {
              if (product.categories[j].parent === category.category_name) {
                return product;
              }
            }
          } else if(false) {
            for (let j = 0; j < product.categories.length; j++) {
              if (product.categories[j].name === category.category_name) {
                return product;
              }
            }
          }
          else if(searchResulteId){
            console.log("hi");
            for (let j = 0; j < product.length; j++) {
              for(let i = 0; i < searchResulteId.length; i++)
              if (product._id[j] === searchResulteId[i]._id) {
                console.log(searchResulteId[i]._id);
                return product;
              }
            }
          }
        })
      );
    };
    filteringProducts();
    if(state.heading.category_name){
      setHeader(state.heading.category_name)
    }
    else{ setHeader(state.heading)}
    
  },[allProductsAray,state.heading]);


  return (
    <Stack w="100%">
      <Heading
        size={["md", "md", "xl"]}
        color="#94530D"
        pt="1em"
        textAlign="center"
      >{`▻ ${header}◅`}</Heading>
      <SimpleGrid columns={[1, 1, 2, 4]} gap="1rem" margin="5em">
        {filteredProducts.map((product) => {
          return (
            <Card boxShadow="2xl" maxW="sm" key={product._id}>
              <CardBody>
                <Stack>
                  <Image
                    boxSize="10em"
                    component="img"
                    alt={product.product_name}
                    src={product.product_image}
                    _hover={{ transform: "scale(1.2)" }}
                    alignSelf="center"
                  />

                  <Heading size="md">{product.product_name}</Heading>
                  <Text as="b">{` ${product.product_price} ₪`}</Text>
                </Stack>
              </CardBody>

              <Button
                alignSelf="center"
                maxW="40%"
                size="md"
                borderColor="#E8DBC9"
                variant="outline"
                margin="1em"
                colorScheme="orange"
                onClick={()=>{ navigate("/product", { state: product._id })}}
              >
                קנה עכשיו
              </Button>
            </Card>
          );
        })}
      </SimpleGrid>
    </Stack>
  );
};

export default ProductCard;
