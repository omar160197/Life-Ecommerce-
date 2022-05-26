import  React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTotals } from '../../store/cart/cartSlice';

function PriceDetails2({order}) {
    const cart = useSelector((state) => state.cart);
    const dispatch =useDispatch() 
    useEffect(() => {
      dispatch(getTotals());
    }, [cart]);

    return (
    <div className="price-details">
    <div className="subtotal d-flex justify-content-between my-2">
        <span className=" lable-price">Subtotal</span>
        <span className=" peice">EGP {parseFloat(order.receipt.total)}</span>
    </div>
    <div className="subtotal d-flex justify-content-between my-2">
        <span className=" lable-price">Shipping amount</span>
        <span className=" peice">EGP 00.00</span>
    </div>
    <div className="subtotal d-flex justify-content-between my-2">
        <span className=" lable-price">Delivery Fees</span>
        <span className=" peice"> EGP 00.00</span>
    </div>
    <div className="subtotal d-flex justify-content-between my-2">
        <span className=" lable-price">Subtotal</span>
        <span className=" peice">EGP 00.00</span>
    </div>
    <div className="subtotal d-flex justify-content-between my-2">
        <span className=" lable-price">Shipping Discount</span>
        <span className='text-success peice'> - EGP 00.00</span>
    </div>
    <div className="subtotal d-flex justify-content-between my-2">
        <span className=" lable-price">Request Date</span>
        <span className='text-success peice'> {order.orderDate.requestDate.split('T')[0]}</span>
    </div>
    {order.status === "Confirmed" &&<div className="subtotal d-flex justify-content-between my-2">
        <span className=" lable-price">Delivery Date</span>
        <span className='text-success peice'> {order.orderDate.deliverDate.split('T')[0]}</span>
    </div>}
    <div className="subtota border-top border-bottom py-2 d-flex justify-content-between my-2">
        <span className=" lable-price">Total</span>
        <span className='font-weight-bold '> EGP {order.receipt.total}</span>
    </div>
</div>
  )
}

export default PriceDetails2