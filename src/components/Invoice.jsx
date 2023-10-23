import {useState, useEffect} from "react";


const Invoice = ({invoice}) => {
    const {id, invoice_id, name, due, invoice_total, status, status_name} = invoice;

    return (
        <div className="border m-2 p-1 d-flex flex-row flex-wrap gap-3 justify-content-between">
            <p className="fw-bold">{invoice_id}</p>
            <p>{due}</p>
            <p>{name}</p>
            <p className="fw-bold w-50">{"£" + invoice_total}</p>
            <p className="btn"><li>{status_name}</li></p>
            <div className="d-none d-lg-block">></div>
        </div>
    )
}

export default Invoice