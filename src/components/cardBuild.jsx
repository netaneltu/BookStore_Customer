// import React from 'react';
// import allProducts from "../hooks/allProducts";
// import Card from '@mui/material/Card';
// import { CardMedia,CardContent,Typography,CardActions,Button, Stack } from '@mui/material';
// import { ThemeProvider, createTheme } from "@mui/material";




// const CardBuild = () => {
//     const theme = createTheme();
    
    
    






//     return (<ThemeProvider theme={theme}>
//         {allProducts().map((product)=>{
//             return(
//                 <Stack direction="row" >
//          <Card key={product._id} sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="140"
//         image={product.product_image}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//         { product.product_name}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//     </Stack>
//     )
//     })
// }
// </ThemeProvider>
            
        
//             );
//         };
       

// export default CardBuild;