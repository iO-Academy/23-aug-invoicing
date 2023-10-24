import {useState, useEffect} from "react";
import Invoice from "../Invoice/index.jsx";

function InvoiceContainer (props) {
        return (
            <div className="container">
                {props.invoices.map((invoice) => {
                    return <Invoice key={invoice.id} invoice={invoice} shopDetails={props.shopDetails} />
                })}
            </div>
        )
    }
    export default InvoiceContainer