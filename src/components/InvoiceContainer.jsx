import {useState, useEffect} from "react";
import Invoice from "./Invoice.jsx";

const InvoiceContainer = (props) => {
        return (
            <div className="container">
                {props.invoices.map((invoice) => {
                    return <Invoice key={invoice.id} invoice={invoice} />
                })}
            </div>
        )
    }

    export default InvoiceContainer