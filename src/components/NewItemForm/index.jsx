import {useState, useEffect} from "react";
import React from 'react'

function NewItemForm() {
    const [quantity, setQuantity] = useState(0);
    const [rate, setRate] = useState(0);

    const rowTotal = (quantity, rate) => {
        return (Number(quantity) * Number(rate)).toFixed(2);
    }

    return (
        <div>
            <table className="table w-100 small">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Rate</th>
                    <th>Total</th>
                </tr>
                </thead>
            </table>
            <div className="d-flex flex-row justify-content-evenly small">
                <form method="post" className="d-flex flex-row justify-content-evenly">
                    <textarea name="textarea" rows="4" cols="8" placeholder="Description"></textarea>
                    <input type="number" className="w-25 h-25 " placeholder="Quantity" value={quantity} onChange={
                        (e) => {
                            setQuantity(e.target.value)
                        }}/>
                    <div className="input-group input-medium w-25">
                        <span className="input-group-text h-25 w-25">£</span>
                        <input type="number" className="h-25 form-control input-lg" readOnly="" placeholder="Rate" value={rate} onChange={
                            (e) => {
                                setRate(e.target.value)
                            }}/>
                    </div>
                </form>
                <p>£{rowTotal(quantity, rate)}</p>
                <div className="d-flex flex-column">
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-end">
                <p>Total</p>
                <p>£0.00</p>
            </div>

        </div>
)
}

export default NewItemForm