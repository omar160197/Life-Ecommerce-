import { Typography } from "@mui/material";
import React from "react";
// import product1 from "../../assets/2.png";
function Orderes({ product }) {
  console.log(product);

  let priceAfter =
    product.discount.discountAmount !== 0
      ? (product.price * product.discount.discountAmount) / 100
      : product.price;

  return (
    <div className="order d-flex justify-content-between  ">
      <div className="image-pro">
        <img src={product.image} alt="jjj" style={{ width: "50px" }} />
      </div>
      <div className="details">
        <p className="title-pro">{product.description}</p>
        <>
          <Typography
            sx={{
              textDecoration: "line-through",
              display: "inline",
              display: `${
                product.discount.discountAmount !== 0 ? "inline" : "none"
              }`,
            }}
            gutterBottom
            variant="h8"
            component="div"
          >
            {`EGP ${product.price}`}
          </Typography>
          <span
            style={{
              display: `${
                product.discount.discountAmount !== 0 ? "inline" : "none"
              }`,
              marginLeft: "10%",
              color: "#aa2e25",
              padding: "2px",
              backgroundColor: "#ffd54f",
            }}
          >{`-${product.discount.discountAmount}%`}</span>
        </>
        <p
          className={`text-warning salary-pro`}
          style={{
            fontSize: "20px",
          }}
        >
          EGP {priceAfter}
        </p>
        <p
          style={{
            fontSize: "15px",
          }}
          className=" qty-pro"
        >
          Qty: {product.cartQuantity}
        </p>
      </div>
    </div>
  );
}

export default Orderes;
