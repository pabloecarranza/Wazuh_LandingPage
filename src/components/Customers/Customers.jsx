import React from "react";
import "./Customers.css";
import SimpleSlider from "./Carousel";

export const Customers = () => {
  return (
    <div className="CustomersBox">
      <div className="titleCustomers">
        <h3>What our customers say about us</h3>
      </div>
      <SimpleSlider />
    </div>
  );
};
