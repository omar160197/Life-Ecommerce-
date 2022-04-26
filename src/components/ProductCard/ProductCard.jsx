import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/product/productSlice";
import { getTotals } from "../../store/cart/cartSlice";
import OfferCard from "../offersCard/offersCard";
import ListSkelton from './../Skeleton/Skeleton';




const ProductCard = () => {
  const { products,isLoading } = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(getTotals());
  }, [cart]);


  useEffect(() => {
    dispach(getProducts());
  }, [dispach]);

  return (
    <>
 {isLoading ?
       <> 
     
    <ListSkelton listsToRender={8} />
     
  </> 
  :  
  <>
      {products &&
        products.map((product, index) => (
          <Grid
            item
            lg={3}
            md={4}
            sm={6}
            xs={6}
            key={index}
            
          >
            <OfferCard
              product={product}
              productId={product._id}
              productName={product.productName}
              maxNumOfProducts={product.quantity}
              numOfProductsThatReduced={2}
              priceBefore={product.price}
              image={product.image}
              discountPersentatge={product.discount.discountAmount}
              ratingValue={product.rating}
              description={product.description}
            />
          </Grid>
        ))}
        </>
}
    </>
  );
};
export default ProductCard;
