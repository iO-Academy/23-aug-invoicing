import {useEffect, useState} from "react";

function NewItemRow({
                        index,
                        invoiceObj,
                        setInvoiceObj,
                    }) {

    const [itemInfo, setItemInfo] = useState({
        description: "",
        quantity: 0,
        rate: 0,
        total: 0,
    });
    const rowTotal = (quantity, rate) => {
        return quantity && rate
            ? (Number(quantity) * Number(rate)).toFixed(2)
            : (0).toFixed(2);
    };

    return (
        <div className="d-flex flex-row w-100 small gap-1">
            <div className="col-3">
        <textarea
            name="textarea"
            className="w-100"
            rows="4"
            placeholder="Description"
            value={itemInfo["description"]}
            onChange={(e) => {
                {
                    setItemInfo({...itemInfo, description: e.target.value});
                    let newItemInfo = [...invoiceObj];
                    newItemInfo[index].description = e.target.value;
                    setInvoiceObj(newItemInfo);
                }
            }}
        ></textarea>
            </div>
            <div className="col-2">
                <input
                    type="number"
                    value={itemInfo["quantity"]}
                    className="w-100 p-1"
                    placeholder="Quantity"
                    onChange={(e) => {
                        setItemInfo({...itemInfo, quantity: e.target.value});
                        let newItemInfo = [...invoiceObj];
                        newItemInfo[index].quantity = e.target.value;

                        let total = rowTotal(itemInfo.rate, e.target.value);
                        newItemInfo[index].total = total;

                        setInvoiceObj(newItemInfo);
                    }}
                />
            </div>
            <div className="col-3">
                <div className="input-group input-medium">
          <span className="input-group-text h-25 p-1 bg-secondary-subtle">
            £
          </span>
                    <input
                        type="number"
                        value={itemInfo["rate"]}
                        onChange={(e) => {
                            setItemInfo({...itemInfo, rate: e.target.value});
                            let newItemInfo = [...invoiceObj];
                            newItemInfo[index].rate = e.target.value;

                            let total = rowTotal(e.target.value, itemInfo.quantity);
                            newItemInfo[index].total = total;

                            setInvoiceObj(newItemInfo);
                        }}
                        className="h-25 form-control input-lg p-1"
                        readOnly=""
                        placeholder="Rate"
                    />
                </div>
            </div>
            <div className="col-2">
                <p>£{invoiceObj[index].total}</p>
            </div>
            <div className="d-flex flex-column w-100 gap-2">
        <span
            className="btn btn-success"
            onClick={() => {
                setInvoiceObj([
                    ...invoiceObj,
                    {description: "", quantity: 0, rate: 0, total: 0},
                ]);
            }}
        >
          +
        </span>
                <span className="btn btn-danger">-</span>
            </div>
        </div>
    );
}

export default NewItemRow;
