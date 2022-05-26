import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTotals } from '../../store/cart/cartSlice';

function ShipmentDetails() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
 

  const cartShiping=cart.cartItems.map((item,index)=>{
    return(
   <div className='border-bottom'>
        <p>Shipment 1 of {item.cartQuantity}</p>
        <p><span style={{fontWeight:"bold"}}>Product Name : </span> {item.productName}</p>
        <p><span style={{fontWeight:"bold"}}>Product Dsc : </span>{item.description}</p>
    </div>
    )
  })

  return (
    <div>
      {cartShiping}
    </div>
  )
}

export default ShipmentDetails