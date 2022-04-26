import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';
import SkillsProgress from '../offers/offersCardProgress';

// import styles from './'



export default function DiscountCard({productName,maxNumOfProducts,numOfProductsThatReduced,priceBefore,discountPersentatge}) {
 let priceAfter=(priceBefore*discountPersentatge)/100
 
    return (
    <Card sx={{ maxHeight:"100%",padding:"0",border:"solid 2px #FF0000"}}>
      <CardActionArea>
      <Box sx={{flexGrow: 1,py:"1%",borderRadius:"2px",backgroundColor:"#FF0000"}}>
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
              Flash Sales Every day
            </div>
          </Grid>
          <Grid item xs={6}>
            <div
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "90%",
                color: "white",
              }}
            >
              Time Left: 08h : 36m : 50s{" "}
            </div>
          </Grid>
        </Grid>
       

      </Box>
        <CardContent sx={{padding:"1%"}}> 
          <Typography sx={{fontWeight:"bold" , marginBottom:"0"}} gutterBottom variant="h5" component="div">
           {`EGP ${priceAfter}`}
          </Typography>
          <Typography sx={{textDecoration: "line-through"}} gutterBottom variant="h8" component="div">
           {`EGP ${priceBefore}`}
          </Typography>
          <SkillsProgress 
          maxNumOfProducts={maxNumOfProducts}
          numOfProductsThatReduced={numOfProductsThatReduced}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
