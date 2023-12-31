import {useState, useEffect} from "react";
import React from "react";
import CreateNewInvoiceButton from "../CreateNewInvoiceButton/index.jsx";
import NewItemRow from "../NewItemRow/";

function NewItemForm({clientId}) {
    const [invoiceObj, setInvoiceObj] = useState([
        {description: "", quantity: 0, rate: 0, total: 0},
    ]);

    let itemTotals = invoiceObj.map((invoice) => Number(invoice.total));
    let total = itemTotals.reduce((item, currentVal) => item + currentVal)

    return (
        <>
            <div>
                <div
                    className="d-flex flex-row w-100 small gap-1 fw-bold align-items-center py-1 border-top border-bottom my-1">
                    <div className="col-3 align-items-center">Description</div>
                    <div className="col-2 align-items-center">Quantity</div>
                    <div className="col-3 align-items-center">Rate</div>
                    <div className="col-2 align-items-center">Total</div>
                </div>
                <form
                    method="post"
                    className="d-flex flex-column justify-content-evenly"
                >
                    {invoiceObj.map((item, index) => {
                        return (
                            <NewItemRow
                                key={index}
                                index={index}
                                invoiceObj={invoiceObj}
                                setInvoiceObj={setInvoiceObj}
                            />
                        );
                    })}
                </form>
                <div className="d-flex flex-row justify-content-end bg-warning fw-bold">
                    <span className="d-flex col-10 justify-content-end">Total</span>
                    <span className="col-2 d-flex justify-content-end">£{total}</span>
                </div>
            </div>
            <div className='d-flex w-100 justify-content-end py-2'>
                <CreateNewInvoiceButton invoiceObj={invoiceObj} total={total} clientId={clientId}/>
            </div>
        </>
    );
}

export default NewItemForm;
