import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OfferCard from "../../components/offersCard/offersCard";
import OffersContainer from "../../components/offersContainer/offersContainer";
import { Container } from "@mui/material";
import {  useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsInDiscount } from "../../store/offers/offersSlice";
import { getTotals } from "../../store/cart/cartSlice";
import { useEffect, useRef, useState } from "react";

export default function SeeAllOffers() {
  const [timerday, settimerday] = useState("00");
  const [timerhours, settimerhours] = useState("00");
  const [timerminutes, settimerminutes] = useState("00");
  const [timerseconds, settimerSeconds] = useState("00");
let interval=useRef();
const countDown =()=>{
const countDate=new Date('may 1,2022 00:00:00').getTime();
interval=setInterval(() => {
  const now=new Date().getTime();
  const discounter=countDate-now;
  const days=Math.floor(discounter/(1000*60*60*24));
  const hours=Math.floor((discounter%(1000*60*60*24)/(1000*60*60)));
  const minutes=Math.floor((discounter%(1000*60*60)/(1000*60)))
  const seconds=Math.floor((discounter%(1000*60)/(1000)))
  if(discounter<0){
    clearInterval(interval.current)
  }else{
    settimerday(days);
    settimerhours(hours);
    settimerminutes(minutes);
    settimerSeconds(seconds);
  }
}, 1000);
} 
  useEffect(() => {
    countDown();
    return()=>{
    clearInterval(interval.current)
    }
  });
  const { oneDiscount, productsInDiscount } = useSelector(
    (state) => state.discounts
  );
  const dispatch = useDispatch();


  const { pathname } = useLocation();
  const cart = useSelector((state) => state.cart);

 useEffect(() => {
    dispatch(getProductsInDiscount(oneDiscount));
    dispatch(getTotals());
  }, [cart]);
  
useEffect(()=>{
    window.scrollTo(0, 0);
  },[pathname])

  const offerCard =
    productsInDiscount &&
    productsInDiscount.map((item, index) => {
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
    <Container sx={{ marginY: "5%" }}>
      <OffersContainer
        offerTime={` Time Left ${timerday}d : ${timerhours}h:${timerminutes}m:${timerseconds}s`}
        containerColor="#e61601"
        textColor="white"
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          {offerCard}
        </Grid>
      </Box>
    </Container>
  );
}
