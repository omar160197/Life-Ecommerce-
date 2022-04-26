import React from 'react'
import emptyCart from '../../assets/cart.svg'
function EmptyCart() {
  return (
    <>
      <div className='container text-center border border-dark my-5 py-3'> 
        <img src={emptyCart}/>
        <h3 className='my-3'>Cart is Empyt</h3>
        <p>Do you have an account? Log in to see the products in your shopping cart</p>
        <button className='btn btn-primary'>Start Shopping</button>
      </div>
    </>
  )
}

export default EmptyCart