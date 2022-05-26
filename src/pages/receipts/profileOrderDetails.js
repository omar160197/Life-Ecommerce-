import React from "react";
import { Container } from "@mui/material";
import ShipmentDetails2 from "../../components/rceipts/shipment2"
import PriceDetails from "../../components/rceipts/price-details";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toggle } from "../../store/receipts/receiptSlice";
import { getUserInfo } from "../../store/receipts/receiptSlice";
import { insertOrder } from "../../store/orders/ordersSlice";
import Swal from "sweetalert2";
import PriceDetails2 from "../../components/rceipts/price-details2"

function ProfileOrdersDetails({ order }) {
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart);
  console.log(user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  return (
    <Container>
      <div className="container-md mob-cart-Container   ">
        <div className="row">
          <div className="jumbotron border w-100 shadow p-3 mb-5 bg-white rounde text-capitalize col-sm-12">
            <div className="title d-flex justify-content-between">
             
            </div>
            <div className="container">
              <div className="border border-bottom-0 rounded-2 p-2">
                <p className=" border-bottom">SHIPMENT DETAILS</p>
                <ShipmentDetails2  order={order}/>
                <PriceDetails2 order={order}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProfileOrdersDetails;
