import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import CardBuild from './cardBuild';
import { shadows } from "@mui/system";

import "./style.css";

import allProducts from "../hooks/allProducts";
import Card from "@mui/material/Card";
import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";

const SaleCarousel = () => {
  const theme = createTheme({
    
    palette: {
      primary: {
        main: "#795548",
      },
      
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Carousel
      
        additionalTransfrom={0}
        
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="carousel-container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={true}
        itemClass="Carousel"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        containerWidth={300}
        responsive={{
          desktop: {
            breakpoint: {
              max: 2000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={true}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {allProducts().map((product) => {
          return (
            <Card
              raised
              key={product._id}
              sx={{
                height: 300,
                maxWidth: 250,
                borderRadius: 2,
               
                
              }}
              
            >
              <CardMedia
                component="img"
                alt={product.product_name}
                sx={{ minHeight:"8em" ,padding: "0em 4em 0 4em", objectFit: "fill" }}
                image={product.product_image}
                _hover={{transform:"scale(1.2)"}}
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {product.product_name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="#795548"
                  sx={{ fontWeight: "bold" }}
                >{` ${product.product_price} ₪`}</Typography>
              </CardContent>
              <CardActions className="parentFlexSplit" disableSpacing>
                <Button  color="primary" size="medium" variant="outlined">
                  קנה עכשיו
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Carousel>
    </ThemeProvider>
  );
};
export default SaleCarousel;
