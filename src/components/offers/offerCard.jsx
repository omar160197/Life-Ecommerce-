import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SkillsProgress from "./offersCardProgress";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from '../Draft/draft.module.css'
export default function OffersCard({
  image,
  productName,
  maxNumOfProducts,
  numOfProductsThatReduced,
  priceBefore,
  discountPersentatge,
  productId,
  description,
  product
}) {

  let priceAfter = discountPersentatge !== 0 ?(priceBefore * discountPersentatge) / 100 :priceBefore;
  const navigate = useNavigate();

    // dispatch(selectProduct(productId));
    const onClick=()=>{
     navigate(`/details/${product._id}`,{
       state :{
         selectedProduct:product
       }
     })
   }

  return (
    <Card onClick={onClick}  className={styles.draft} sx={{ maxWidth: 280, maxHeight: 330, marginLeft: "2%" }} >
  
        <CardMedia 
          sx={{
            display: "block",
            marginTop: "1%",
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
            sx={{ marginBottom: "0%",fontWeight: "bold" }}
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
          
          <>
          <Typography
            sx={{ textDecoration: "line-through",display:"inline" ,visibility:`${discountPersentatge !== 0?'visable':'hidden'}`}}
            gutterBottom
            variant="h8"
            component="div"
          >
            {`EGP ${priceBefore}`}
            </Typography>
            <span
                style={{
                  visibility:`${discountPersentatge !== 0?'visable':'hidden'}`,
                  marginLeft: "10%",
                  color: "#aa2e25",
                  padding: "2px",
                  backgroundColor: "#ffd54f",
                }}
              >{`-${discountPersentatge}%`}</span>
              </>
          
          <SkillsProgress
           itemsLeft={product.itemsLeft}
            maxNumOfProducts={maxNumOfProducts}
            numOfProductsThatReduced={numOfProductsThatReduced}
            // leftItems={product.itemsLeft}
          />
        </CardContent>
    </Card>
  );
}

