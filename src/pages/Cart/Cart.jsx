import { Alert, Container, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {getUsers} from  '../../store/auth/authSlice';
import {
  getTotals,
  addToCart,
  clearCart,
  decreaseCart,
  removeFromCart,
  increment,
  decrement,
} from "../../store/cart/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const user =useSelector((state)=>state.auth.user)
  const counter = useSelector((data) => data.cart.counterValue);

  console.log(cart);

  useEffect(() => {
    dispatch(getTotals());
    if(user){
      dispatch(getUsers(user.customer._id))

    }
  }, [cart, dispatch]);


  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = ()=>{
    if(user)
    {
      dispatch(getUsers(user.customer._id))
      navigate('/receipts')
      
    }else{
      navigate('/register')
    }
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    // ...theme.typography.body2,
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),

    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const productItem = cart.cartItems.map((item, index) => {
    let priceAfter = item.discount.discountAmount !== 0 ?(item.price * item.discount.discountAmount) / 100:item.price ;
    return (
      <Item key={index}>
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <Box sx={{ display: "flex", flexDirection: "row" ,marginBottom:"4%" }}>
              <img
                style={{ width: "70px", height: "70px" }}
                src={item.image}
                alt=""
              />
              <Box>
                <h5 style={{ fontFamily: "tahoma", color: "black" }}>
                  {item.productName}
                </h5>
                <p>{item.description}</p>
              </Box>
            </Box>
            <span onClick={()=>dispatch(removeFromCart(item))} className="text-danger mt-4 ms-2" role="button">
              <i className="fa-solid fa-trash-can  ps-2"> </i> remove
            </span>
          </Grid>

          <Grid sx={{ marginRight: "20px" }} item>
            <Box
              sx={{
                right: 0,
                fontWeight: "bold",
                fontSize: "25px",
                color: "black",
              }}
            >
              {`EGP ${priceAfter}`}
            </Box>
           <Box>
              <span
                style={{
                  visibility:`${item.discount.discountAmount !== 0?'visable':'hidden'}`,
                  marginRight: "2px",
                  fontSize: "20px",
                  textDecoration: "line-through",
                }}
              >{`EGP ${item.price}`}</span>
              <span
                style={{
                  visibility:`${item.discount.discountAmount !== 0?'visable':'hidden'}`,
                  margin: "2px",
                  color: "#e65100",
                  padding: "2px",
                  backgroundColor: "#ffd54f",
                }}
              >{`-${item.discount.discountAmount}%`}</span>
            </Box>
            <Box>
              <span className="d-flex align-items-center">
                <i
                  className="fa-solid fa-circle-minus fs-2"
                  role="button"
                  onClick={() =>
                   {
                    handleDecreaseCart(item)}
                  }
                ></i>
                <span style={{ fontSize: "20px" }} className="p-3">
                  {item.cartQuantity}
                </span>
                <i
                  className="fa-solid fa-circle-plus fs-2"
                  role="button"
                  onClick={() => {handleAddToCart(item);
                  }
                  }
                ></i>
              </span>
            </Box>
          </Grid>
        </Grid>
      </Item>
    );
  });

  return (
    <>
      <Container sx={{ marginY: "7%" }}>
        {cart.cartItems.length <= 0 ? (
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
              Your Cart Is Empty !
            </Alert>
          </Box>
        ) : (
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <Item>
                  <Box sx={{ flexDirection: "row" }}>
                    <h5
                      style={{
                        marginLeft: "1%",
                        fontFamily: "tahoma",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Cart({cart.cartTotalQuantity})
                    </h5>
                  </Box>
                </Item>
                {productItem}
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <div>
                    <h5 className="d-md-block d-none"> CART Summary</h5>
                    <hr className="d-md-block d-none" />
                    <div className="tootal d-flex justify-content-between h-50 flex-sm-column">
                      <p className="d-none d-md-block"> subtootal</p>
                      <h4 className="d-md-block d-none">{`EGP ${cart.cartTotalAmount}`}</h4>
                    </div>
                    <button onClick={()=>handleCheckout()} className="btn btn-primary w-100 ">
                    {`Checkout EGP ${cart.cartTotalAmount}`}
                       
                    </button>
                  </div>
                </Item>
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
    </>
  );
};

export default Cart;
