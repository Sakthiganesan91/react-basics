import React from "react";
import { useLocation } from "react-router-dom";

function Order() {
  const location = useLocation();

  return <div>Order Confirmed</div>;
}

export default Order;
