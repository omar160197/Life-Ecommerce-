import { Box, Container, Grid } from "@mui/material";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import img7 from "../../assets/dentalcare.jpg";

const Product = () => {

  
  return (
    <>
     <CategoryCard image={img7} />
      <Container>
        <Grid container spacing={5}>
          <ProductCard />
        </Grid>
      </Container>
    </>
  );
};

export default Product;
