import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTotals } from '../../store/cart/cartSlice';

export default function ShipmentDetails2({order}) {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
 

  const cartShiping=order.receipt.products.map((item,index)=>{
    return(
   <div className='border-bottom'>
        <p>Shipment {index+1}</p>
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

