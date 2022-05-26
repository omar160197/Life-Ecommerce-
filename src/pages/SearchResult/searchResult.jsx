import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import OfferCard from "../../components/offersCard/offersCard";
import { useLocation } from "react-router-dom";
import { getTotals } from "../../store/cart/cartSlice";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export default function SearchResult() {
  const { selectedOfferProduct } = useSelector((state) => state.discounts);
  const { products } = useSelector((state) => state.products);
  const dispatch=useDispatch()
  const { pathname } = useLocation();
  const cart = useSelector((state) => state.cart);

  React.useEffect(() => {
    console.log(selectedOfferProduct);
    dispatch(getTotals());
    window.scrollTo(0, 0);
  }, [pathname,cart]);

  const seachCard =
    selectedOfferProduct &&
    products &&
    products
      .filter((item) => {
        return (
          item._id === selectedOfferProduct._id ||
          item.productName === selectedOfferProduct.productName ||
          item.company === selectedOfferProduct.company ||
          item.countryOfManufacture ===
            selectedOfferProduct.countryOfManufacture
        );
      })
      .map((item, index) => {
        return (
          <Grid key={index} item xs={6} md={3} sm={6}>
            <OfferCard
             product={item}
              productId={item._id}
              productName={item.productName}
              maxNumOfProducts={item.quantity}
              numOfProductsThatReduced={2}
              priceBefore={item.price}
              image={item.image}
              discountPersentatge={item.discount.discountAmount}
              ratingValue={item.rating}
              description={item.description}
            />
          </Grid>
        );
      });

  return (
        <Container  disableGutters={true} sx={{ marginY: "8%", width: "100%" }}>
          <Box >
           
              
              <Grid container item spacing={2} xs={12}>
                {seachCard}
              
            </Grid>
          </Box>
        </Container>
  );
}
