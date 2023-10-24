import {useState, useEffect} from "react";


const Invoice = ({invoice}) => {
    const {id, invoice_id, name, due, invoice_total, status, status_name} = invoice;

    function statusClass() {
        if (status_name === 'Pending') {
            return 'btn-outline-warning';
        } else if (status_name === 'Cancelled') {
            return 'btn-outline-secondary';
        } else if (status_name === 'Paid') {
            return 'btn-outline-success';
        } else {
            return 'btn-outline-danger';
        }
    }

    let formattedDate = new Date(due).toLocaleDateString('en-gb', {day:"numeric", month:"long", year:"numeric"})

    return (
        <div className="border m-2 p-2 d-flex flex-row flex-wrap justify-content-between">
            <p className="fw-bold m-0 small">#{invoice_id}</p>
            <p className="m-0 small text-secondary">Due {formattedDate}</p>
            <p className="m-0 small text-secondary fw-semibold">{name}</p>
            <p className="fw-bold w-50 m-0">{"£ " + invoice_total}</p>
            <p className={"btn m-0 p-1 " + statusClass()}><li className="small">{status_name}</li></p>
            <div className="d-none d-lg-block">></div>
        </div>
    )
}

export default Invoice