import {  useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Delivery from "../../components/delivery/delivery";
import ImageGallaryComponent from "../../components/Deatails/detailsScrollerCarasol";
import { Container, Rating, Typography } from "@mui/material";
import CartButtons from "../../components/Deatails/detailsCartButton";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/favourite/favouriteSlice";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,
}));

export default function ProductDetails() {    
  const [value, setValue] = useState(2);
  const location = useLocation();
const dispatch = useDispatch();
  return (
      <>
      <Container >
      <Box sx={{ flexGrow: 1 }} key={location.state.info._id} my={3} mt={9}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            <Grid container spacing={2}>

              <Grid item md={6} sm={12}>
                <ImageGallaryComponent />
              </Grid>
              <Grid item  md={6} sm={12} >
                <Grid container spacing={5}>
                  <Grid item xs={10}>
                    <Typography sx={{ fontSize: 20 }} color="text.primary">
                   
                    {location.state.info.productName}
                    </Typography>
                  </Grid>
                  <Grid item xs={2} >
                  <i className="fa fa-solid fa-heart" style={{cursor:"pointer",color: "#ccc" }} onClick={(event)=>{dispatch(addItem(location.state.info));event.target.style.color="red"}} ></i>
                  </Grid>
                </Grid>

                <Box sx={{ display: "center", alignItems: "center" }}>
                  <Rating
                    sx={{ paddingTop: "3%" }}
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    size="small"
                  />
                  <Typography variant="body2" component="p" marginLeft={1}>
                    <a href="#/">{`(${value} verified ratings)`}</a>
                  </Typography>
                </Box>
                <Box sx={{ display: "center", alignItems: "center" }}>
                  <Typography variant="body2" component="p" >
                 
                  </Typography>
                  </Box>
                  <Box>
                  <Typography variant="body2" component="p" >
                  Description:{location.state.info.description}
                  </Typography>
                  
                  <Typography variant="body2" component="p" >
                  Country Of Manufacture:{location.state.info.countryOfManufacture}
                  </Typography>
                  <Typography variant="body2" component="p" >
                  Company:{location.state.info.company}
                  </Typography>
                  <hr></hr>
                  <Typography variant="h5" component="h5" >
                  EGP:{location.state.info.price}
                  </Typography>
                </Box>
              
                <Box >
                  <CartButtons />
                </Box>
              </Grid>
            </Grid>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Delivery />
        </Grid>
      
      </Grid>
      
    </Box>
</Container>
    </>
  );
}
