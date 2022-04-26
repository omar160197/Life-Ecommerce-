// import { useDispatch, useSelector } from 'react-redux';
// import { increment, decrement } from "../../store/cart/cartSlice";
// import product from "../../assets/4.png";
// const productCart = () => {
//     const counter = useSelector((data) => data.cart.counterValue)
//     const dispatch = useDispatch()
//     return (

//         <div className="product-details   mb-1 pb-2">
//             <div className="cart-body d-flex  justify-content-between">
//                 <div className="content d-flex">
//                     <img className="cart-ontent-img" src={product} alt="" />
//                     <p className="lead w-100 fw-bold"> This is a simple hero unit, a simple  or information.
//                         <br />
//                         <span className="fw-bold fs-4">size:</span> EU 48
//                     </p>
//                 </div>
//                 <div className="cart-salary ">
//                     <h3 className="">EGP 198.00</h3>
//                     <del className="">EGP 400.00</del>
//                     <span className="decount bg-warning p-1 rounded ms-2"> -35%</span>
//                 </div>
//             </div>
//             {/* cart Footer */}
//             <div className="cartfooter d-flex justify-content-between align-items-center mt-2">
//                 <span className="text-danger mt-2 ms-2" role="button">
//                     <i className="fa-solid fa-trash-can  ps-2"> </i> remove
//                 </span>
//                 <span className="d-flex align-items-center">
//                     <i className="fa-solid fa-circle-minus fs-2" role="button" onClick={() => counter == 0 ? "" : dispatch(decrement(counter))}></i>
//                     <span className="p-3">{counter}</span>
//                     <i className="fa-solid fa-circle-plus fs-2" role="button" onClick={() => dispatch(increment(counter))}></i>

//                 </span>
//             </div>
//         </div>
//     );
// }

// export default productCart;