import { Container, Alert, Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeItem } from "../../store/favourite/favouriteSlice";
import OfferCard from "../../components/offersCard/offersCard";
import { useEffect } from "react";
import { deleteFavourite, getFavourite } from "../../store/auth/authSlice";
import { useLocation, useNavigate } from "react-router-dom";
const Favourite = () => {
  const myfavourites = useSelector((state) => state.auth.myfavourites);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let favoriteCard = "";

  console.log(user);

  // useEffect(() => {
  //   window.scroll(0, 0);
  //   if (user) {
  //     dispatch(getFavourite(user.customer._id));
  //   }
  // }, []);

  if (user && myfavourites.length != 0) {
    favoriteCard =
      myfavourites &&
      myfavourites.map((item, index) => {
        return (
          <Grid key={index} item xs={6} md={3} sm={6}>
            <Box sx={{ position: "relative" }}>
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
              <DeleteIcon
                sx={{
                  m: 1,
                  position: "absolute",
                  top: 0,
                  right: 0,
                  fontSize: "35px",
                  color: "#ff5722",
                }}
                onClick={() => {
                  
                  dispatch(
                    deleteFavourite({
                      productId: item._id,
                      ownerId: user.customer._id,
                    })
                  );
                  // dispatch(getFavourite(user.customer._id));
                  // navigate("/favourite");
                }}
                cursor="pointer"
              />
            </Box>
          </Grid>
        );
      });
  }

  return (
    <>
      <Container sx={{ marginY: "5%" }}>
        {myfavourites.length <= 0 ? (
          <Box
            height="400px"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Alert
              variant="filled"
              severity="info"
              style={{ width: "1000px", justifyContent: "center" }}
            >
              You don't have any favourites
            </Alert>
          </Box>
        ) : (
          <Box sx={{ flexGrow: 1 }} my={3}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 6, sm: 6, md: 12 }}
            >
              {favoriteCard}
            </Grid>
          </Box>
        )}
      </Container>
    </>
  );
};

export default Favourite;
