import {useEffect, useState} from "react";

function NewItemRow({index, setItemIndex, itemIndex, invoiceObj, setInvoiceObj}) {

    const [itemInfo, setItemInfo] = useState({description: '', quantity: 0, rate: 0, total: 0})
    const rowTotal = (quantity, rate) => {
        return quantity && rate ? (Number(quantity) * Number(rate)).toFixed(2) : (0).toFixed(2);
    }

    // setInvoiceObj([...invoiceObj, itemInfo]);

    return (
        <div className="d-flex flex-row w-100 small gap-1">
            <div className="col-3"><textarea name="textarea" className="w-100" rows="4"
                                             placeholder="Description" value={itemInfo['description']}
                                             onChange={(e) => {
                                                 {
                                                     setItemInfo({...itemInfo, description: e.target.value})
                                                 }
                                             }}></textarea></div>
            <div className="col-2"><input type="number" value={itemInfo['quantity']} className="w-100 p-1"
                                          placeholder="Quantity" onChange={
                (e) => {
                    setItemInfo({...itemInfo, quantity: e.target.value})
                }
            }/></div>
            <div className="col-3">
                <div className="input-group input-medium">
                    <span className="input-group-text h-25 p-1 bg-secondary-subtle">£</span>
                    <input type="number" value={itemInfo['rate']} onChange={(e) => {
                        setItemInfo({...itemInfo, rate: e.target.value})
                    }} className="h-25 form-control input-lg p-1" readOnly="" placeholder="Rate"/>
                </div>
            </div>
            <div className="col-2"><p>£{rowTotal(itemInfo.quantity, itemInfo.rate)}</p></div>
            <div className="d-flex flex-column w-100 gap-2">
                <span className="btn btn-success" onClick={() => {
                    setItemIndex([...itemIndex, 1])
                }}>+</span>
                <span className="btn btn-danger">-</span>
            </div>
        </div>
    )
}

export default NewItemRow