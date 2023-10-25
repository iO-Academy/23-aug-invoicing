import {useState, useEffect} from "react";
import React from 'react'
import CreateNewInvoiceButton from "../CreateNewInvoiceButton/index.jsx";

function NewItemForm() {
    const [quantity, setQuantity] = useState(0);
    const [rate, setRate] = useState(0);
    const [description, setDescription] = useState();
    const [total, setTotal] = useState(0);

    const rowTotal = (quantity, rate) => {
        return quantity && rate ? (Number(quantity) * Number(rate)).toFixed(2) : (0).toFixed(2);
    }
    let totalCalc;
    useEffect(() => {
        rowTotal(quantity, rate)
        totalCalc = Number(quantity) * Number(rate);
        setTotal(totalCalc);
    }, [rate, quantity]);

    return (
        <>
        <div>
            <div className="d-flex flex-row w-100 small gap-1 fw-bold align-items-center py-1 border-top border-bottom my-1">
                <div className="col-3 align-items-center">Description</div>
                <div className="col-2 align-items-center">Quantity</div>
                <div className="col-3 align-items-center">Rate</div>
                <div className="col-2 align-items-center">Total</div>
            </div>
            <form method="post" className="d-flex flex-row justify-content-evenly">
                <div className="d-flex flex-row w-100 small gap-1">
                    <div className="col-3"><textarea value={description} name="textarea" className="w-100" rows="4"
                                                     placeholder="Description" onChange={ (e) => {
                        setDescription(e.target.value)}}></textarea></div>
                    <div className="col-2"><input type="number" className="w-100 p-1" placeholder="Quantity"
                                                  value={quantity} onChange={
                        (e) => {
                            setQuantity(e.target.value)
                        }}/></div>
                    <div className="col-3">
                        <div className="input-group input-medium">
                            <span className="input-group-text h-25 p-1 bg-secondary-subtle">£</span>
                            <input type="number" className="h-25 form-control input-lg p-1" readOnly="" placeholder="Rate"
                                   value={rate} onChange={
                                (e) => {
                                    setRate(e.target.value)
                                }}/>
                        </div>
                    </div>
                    <div className="col-2"><p>£{rowTotal(quantity, rate)}</p></div>
                        <div className="d-flex flex-column w-100 gap-2">
                            <span className="btn btn-success">+</span>
                            <span className="btn btn-danger">-</span>
                        </div>
                </div>
            </form>
            <div className="d-flex flex-row justify-content-end bg-warning fw-bold">
                <span className="d-flex col-10 justify-content-end">Total</span>
                <span className="col-2 d-flex justify-content-end">£0.00</span>
            </div>
            </div>
            <div>
                <CreateNewInvoiceButton quantity={quantity} rate={rate} description={description} total={total}/>
            </div>
        </>
    )
}

export default NewItemForm