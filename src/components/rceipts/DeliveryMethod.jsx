import React from "react";
import { Container } from "@mui/material";
import ShipmentDetails from "../../components/rceipts/ShipmentDetails"
import PriceDetails from "../../components/rceipts/price-details"
import { useDispatch, useSelector } from 'react-redux';
import {useEffect}from "react"
import { toggle } from "../../store/receipts/receiptSlice";
import { getUserInfo} from "../../store/receipts/receiptSlice"
import {insertOrder} from "../../store/orders/ordersSlice"
import Swal from "sweetalert2";

function DeliveryMethod() {
  const user = useSelector((state)=>state.auth.user);
  const cart = useSelector((state) => state.cart)
  console.log(user);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);
  
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

     
    
  return (
    <Container>
      <div className="container-md mob-cart-Container   ">
        <div className="row">
          <div className="jumbotron border w-100 shadow p-3 mb-5 bg-white rounde text-capitalize col-sm-12">
            <div className="title d-flex justify-content-between">
             <h5 style={{color:"black",fontFamily:"tahoma"}}>{`${user.customer.role === 'Doctor'  ? 'Dr ' : 'Mr '}${user.customer.fullName} `}</h5>
              {/* <h5> DELIVERY METHOD</h5> */}
              <button className="btn text-warning" onClick={()=>dispatch(toggle())}>modify</button>
            </div>
            <hr />
            <div className="container">
              <p>
               <span style={{fontWeight:"bold"}}>Country : </span>{user.customer.customerAddress.country}
              </p>
              <p>
               <span style={{fontWeight:"bold"}}>PhoneNumber : </span>{user.customer.customerPhone}
              </p>
              <p>
               <span style={{fontWeight:"bold"}}>City : </span>{user.customer.customerAddress.city}
              </p>
              <p>
               <span style={{fontWeight:"bold"}}>StreetName : </span>{user.customer.customerAddress.streetName}
              </p>
              <p>
               <span style={{fontWeight:"bold"}}>BuildingNumber : </span>{user.customer.customerAddress.buildingNumber}
              </p>
              <p>
               <span style={{fontWeight:"bold"}}>FloorNumber : </span>{user.customer.customerAddress.floorNumber}
              </p>
              <div className="border border-bottom-0 rounded-2 p-2">
                <p className=" border-bottom">SHIPMENT DETAILS</p>
                <ShipmentDetails />
                <PriceDetails />
              </div>

              <button
                type="submit"
                className="btn font-weight-bold-1 w-100 mb-3"
                 onClick={()=>{
                   dispatch(insertOrder({cart,id:user.customer._id}));
                   Toast.fire({
                    icon: 'success',
                    title:'Your Order Is Done',
                    text:'Check Your Profile'
                    
                  })
                
                }}
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default DeliveryMethod;
