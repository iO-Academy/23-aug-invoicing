import { useState, useEffect } from "react";
import Invoice from "../Invoice/index.jsx";

function InvoiceContainer(props) {
  return (
    <div className="container">
      {props.invoices.map((invoice, index) => {
        return (
          <Invoice
            key={index}
            invoice={invoice}
            shopDetails={props.shopDetails}
          />
        );
      })}
    </div>
  );
}
export default InvoiceContainer;
