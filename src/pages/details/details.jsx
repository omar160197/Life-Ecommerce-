import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Delivery from "../../components/delivery/delivery";
import ImageGallaryComponent from "../../components/Deatails/detailsScrollerCarasol";
import { CardActions, Container, Rating, Typography } from "@mui/material";
import DiscountCard from "../../components/Deatails/detailsDiscountCard";
import ProductDetails from "../../components/Deatails/detailsProductCard";
import CartButtons from "../../components/Deatails/detailsCartButton";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  addFavourite,
  deleteFavourite,
} from "../../store/auth/authSlice";
import { getSelectedProduct } from "../../store/offers/offersSlice";
import { getTotals } from "../../store/cart/cartSlice";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export default function Deatails2() {
  const { selectedOfferProduct } = useSelector((state) => state.discounts);

  const [isActive, setIsActive] = React.useState(false);
  const user = useSelector((state) => state.auth.user);
  const myfavourites = useSelector((state) => state.auth.myfavourites);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location =useLocation()
  let myVariable =location.state.selectedProduct;
  const cart = useSelector((state) => state.cart);
   
console.log(myVariable);

  React.useEffect(() => {
    dispatch(getTotals());
    window.scrollTo(0, 0);
    if (user && myfavourites.length != 0  ) {
      if (myfavourites.find((item) => item._id === myVariable._id)){
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    } 
  },[location.pathname,cart]);


  const handleSelect = () => {
    if (user && myfavourites.length != 0) {
      if (myfavourites.find((item) => item._id === myVariable._id)) {
        console.log(true);
        setIsActive(false);
        
        // delete from favorite Array'
        dispatch(
          deleteFavourite({
            productId: myVariable._id,
            ownerId: user.customer._id,
          })
        );
      } else {
        setIsActive(true);
        //add to favorite Array
        dispatch(
          addFavourite({ myVariable, ownerId: user.customer._id })
        );
      }
    } else if (user && myfavourites.length === 0) {
      setIsActive(true);
      //add to favorite Array
      dispatch(
        addFavourite({ myVariable, ownerId: user.customer._id })
      );
    } else {
      navigate("/register");
    }
  };


  return (
    myVariable && (
      <Container sx={{ marginY: "4%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8} sm={12}>
              <Item>
                <Grid container>
                  <Grid item xs={12} md={6} sm={12}>
                    <div style={{ maxWidth: "80%" }}>
                      <ImageGallaryComponent
                        title={myVariable.productName}
                        image={myVariable.image}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6} sm={12}>
                    <Grid container item spacing={3}>
                      <Grid item xs={10}>
                        <Typography
                          sx={{
                            fontSize: 20,
                            fontWeight: "bold",
                            fontFamily: "tahoma",
                          }}
                          color="text.primary"
                        >
                          {myVariable.productName}
                        </Typography>
                        <Typography sx={{ fontSize: 20 }} color="text.primary">
                          {myVariable.description}
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <i
                          className="fa fa-solid fa-heart"
                          style={{
                            fontSize: "25px",
                            cursor: "pointer",
                            color: `${isActive ? "red" : "#ccc"}`,
                          }}
                          onClick={handleSelect}
                        ></i>
                      </Grid>
                    </Grid>
                    <Box sx={{ display: "center", alignItems: "center" }}>
                      <Rating
                        sx={{ paddingTop: "3%" }}
                        name="simple-controlled"
                        readOnly
                        value={
                          myVariable.rating == "undefined" ||
                          myVariable.rating == null
                            ? 0
                            : myVariable.rating
                        }
                        size="small"
                      />
                      <Typography variant="body2" component="p" marginLeft={1}>
                        <a href="#">{`(${
                          myVariable.rating == "undefined" ||
                          myVariable.rating == null
                            ? 0
                            : myVariable.rating
                        } verified ratings)`}</a>
                      </Typography>
                    </Box>
                    {myVariable.discount.discountAmount === 0 ? 
                      <ProductDetails
                      product={myVariable}
                      productName={myVariable.productName}
                      maxNumOfProducts={myVariable.quantity}
                      numOfProductsThatReduced={3}
                      priceBefore={myVariable.price}
                      discountPersentatge={
                      myVariable.discount.discountAmount
                      }
                    />
                   :
                       <DiscountCard
                      product={myVariable}
                      productName={myVariable.productName}
                      maxNumOfProducts={myVariable.quantity}
                      numOfProductsThatReduced={3}
                      priceBefore={myVariable.price}
                      discountPersentatge={
                      myVariable.discount.discountAmount
                      }
                    />
                    }
                    <CardActions style={{ justifyContent: "center" }}>
                      <CartButtons 
                      
                      product={myVariable}
                      />
                    </CardActions>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} sm={12}>
              <Delivery />
            </Grid>
          </Grid>
        </Box>
      </Container>
    )
  );
}
