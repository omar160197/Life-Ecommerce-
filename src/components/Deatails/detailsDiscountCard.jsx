import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid } from "@mui/material";
import SkillsProgress from "../offers/offersCardProgress";
import { useEffect, useRef, useState } from "react";

// import styles from './'

export default function DiscountCard({
  productName,
  maxNumOfProducts,
  numOfProductsThatReduced,
  priceBefore,
  discountPersentatge,
  product
}) {
let priceAfter = discountPersentatge !== 0 ?(priceBefore * discountPersentatge) / 100 :priceBefore;

  const [timerday, settimerday] = useState("00");
  const [timerhours, settimerhours] = useState("00");
  const [timerminutes, settimerminutes] = useState("00");
  const [timerseconds, settimerSeconds] = useState("00");
  let interval = useRef();
  const countDown = () => {
    const countDate = new Date("may 1,2022 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const discounter = countDate - now;
      const days = Math.floor(discounter / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (discounter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((discounter % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((discounter % (1000 * 60)) / 1000);
      if (discounter < 0) {
        clearInterval(interval.current);
      } else {
        settimerday(days);
        settimerhours(hours);
        settimerminutes(minutes);
        settimerSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    countDown();
    return () => {
      clearInterval(interval.current);
    };
  });
  // let priceAfter = (priceBefore * discountPersentatge) / 100;

  return (
    <Card sx={{ maxHeight: "100%", padding: "0", border: "solid 2px #FF0000" }}>
      <CardActionArea>
        <Box
          sx={{
            flexGrow: 1,
            py: "1%",
            borderRadius: "2px",
            backgroundColor: "#FF0000",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={6}>
              <div
                style={{
                  fontSize: "90%",
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
                {` Time Left ${timerday}d : ${timerhours}h:${timerminutes}m:${timerseconds}s`}{" "}
              </div>
            </Grid>
          </Grid>
        </Box>
        <CardContent sx={{ padding: "1%" }}>
          <Typography
            sx={{ fontWeight: "bold", marginBottom: "0" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {`EGP ${priceAfter}`}
          </Typography>
          <Typography
            sx={{ textDecoration: "line-through" }}
            gutterBottom
            variant="h8"
            component="div"
          >
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
