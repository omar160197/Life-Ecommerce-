import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';
import SkillsProgress from '../offers/offersCardProgress';

// import styles from './'



export default function DiscountCard({product,productName,maxNumOfProducts,numOfProductsThatReduced,priceBefore,discountPersentatge}) {
//  let priceAfter=(priceBefore*discountPersentatge)/100
let priceAfter = discountPersentatge !== 0 ?(priceBefore * discountPersentatge) / 100 :priceBefore;

 
    return (
    <Card sx={{ maxHeight:"100%",padding:"0",border:"solid 2px #0d6efd"}}>
      <CardActionArea>
      <Box sx={{flexGrow: 1,py:"1%",borderRadius:"2px",backgroundColor:"#0d6efd"}}>
      <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          
        >
          <Grid item xs={6}>
            <div
              style={{
                fontSize:"90%",  
                textAlign: "left",
                paddingLeft: "2%",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {`${productName} Details`}
            </div>
          </Grid>

        </Grid>
       

      </Box>
        <CardContent sx={{padding:"6%"}}> 
          {/* <Typography sx={{fontWeight:"bold" , marginBottom:"0"}} gutterBottom variant="h5" component="div">
           {`EGP ${priceAfter}`}
          </Typography> */}
          <Typography sx={{fontWeight:"bold"}} gutterBottom variant="h8" component="div">
           {`EGP ${priceBefore}`}
          </Typography>
          <SkillsProgress 
           itemsLeft={product.itemsLeft}
          maxNumOfProducts={maxNumOfProducts}
          numOfProductsThatReduced={numOfProductsThatReduced}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
