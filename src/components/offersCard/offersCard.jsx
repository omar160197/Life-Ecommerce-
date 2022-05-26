import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, CardActions, Rating } from "@mui/material";
import SkillsProgress from "../offers/offersCardProgress";
import CartButtons from "../Deatails/detailsCartButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectProduct } from "../../store/offers/offersSlice";
import styles from "../Draft/draft.module.css";

export default function OfferCard({
  productName,
  maxNumOfProducts,
  numOfProductsThatReduced,
  priceBefore,
  discountPersentatge,
  ratingValue,
  image,
  productId,
  description,
  product,
}) {
  let priceAfter =
    discountPersentatge !== 0
      ? (priceBefore * discountPersentatge) / 100
      : priceBefore;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClick = () => {
    navigate(`/details/${product._id}`, {
      state: {
        selectedProduct: product,
      },
    });
  };
  return (
    <Card
      className={styles.draft}
      sx={{ maxWidth: 300, marginY: 1, flexWrap: "wrap" }}
    >
      <div onClick={onClick} style={{ padding: 0, matgin: 0 }}>
        <CardMedia
          sx={{
            display: "block",
            marginTop: "2%",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
          }}
          component="img"
          height="120"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            sx={{ marginBottom: "0%", fontWeight: "bold" }}
            gutterBottom
            variant="h8"
            component="div"
          >
            {productName}
          </Typography>
          <Typography
            sx={{ marginBottom: "0%" }}
            gutterBottom
            variant="h8"
            component="div"
          >
            {description}
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", marginBottom: "0" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {`EGP ${priceAfter}`}
          </Typography>
          <Typography
            sx={{
              textDecoration: "line-through",
              display: "inline",
              visibility: `${discountPersentatge !== 0 ? "visable" : "hidden"}`,
            }}
            gutterBottom
            variant="h8"
            component="div"
          >
            {`EGP ${priceBefore}`}
          </Typography>
          <span
            style={{
              visibility: `${discountPersentatge !== 0 ? "visable" : "hidden"}`,
              marginLeft: "10%",
              color: "#aa2e25",
              padding: "2px",
              backgroundColor: "#ffd54f",
            }}
          >{`-${discountPersentatge}%`}</span>
          <Box sx={{ display: "center", alignItems: "center" }}>
            <Rating
              sx={{ paddingTop: "3%" }}
              name="read-only"
              value={
                ratingValue == "undefined" || ratingValue == null
                  ? 0
                  : ratingValue
              }
              readOnly
              size="small"
            />
            <Typography variant="body2" component="p" marginLeft={1}>
              <a style={{ color: "blue" }}>{`(${
                ratingValue == "undefined" || ratingValue == null
                  ? 0
                  : ratingValue
              })`}</a>
            </Typography>
          </Box>

          <SkillsProgress
            itemsLeft={product.itemsLeft}
            maxNumOfProducts={maxNumOfProducts}
            numOfProductsThatReduced={numOfProductsThatReduced}
            // leftItems={product.itemsLeft}
          />
        </CardContent>
      </div>
      <CardActions style={{ justifyContent: "center" }}>
        <CartButtons product={product} />
      </CardActions>
    </Card>
  );
}
