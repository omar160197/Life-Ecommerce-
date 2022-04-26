import * as React from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { addToCart } from '../../store/cart/cartSlice';
import { useDispatch } from 'react-redux';
export default function CartButtons({product}) {
  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    // navigate("/cart");
  };

  return (
    
      <Button 
      onClick={handleAddToCart}
      sx={{color:"white",fontWeight:"bold",width:"100%",marginTop:"3%",bgcolor: 'warning.main'}} variant="contained" disableElevation startIcon={<AddShoppingCartOutlinedIcon />}>
        Add To Cart 
      </Button>
  );
}
