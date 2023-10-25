import {useEffect, useState} from "react";

function NewItemRow ({index, setItemIndex, itemIndex, setTotal}) {
    console.log(index)
    const [quantity, setQuantity] = useState(0);
    const [rate, setRate] = useState(0);
    const [description, setDescription] = useState();

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
        <div className="d-flex flex-row w-100 small gap-1">
            <div className="col-3"><textarea name="textarea" className="w-100" rows="4"
                                             value={description} placeholder="Description" onChange={ (e) => {
                {setDescription(e.target.value)}}}></textarea></div>
            <div className="col-2"><input type="number" className="w-100 p-1" placeholder="Quantity" value={quantity} onChange={
         (e) => {
         setQuantity(e.target.value)}
         }/></div>
            <div className="col-3">
                <div className="input-group input-medium">
                    <span className="input-group-text h-25 p-1 bg-secondary-subtle">£</span>
                    <input type="number" value={rate} onChange= {(e) =>  {setRate(e.target.value)}} className="h-25 form-control input-lg p-1" readOnly="" placeholder="Rate"/>
                </div>
            </div>
            <div className="col-2"><p>£{rowTotal(quantity, rate)}</p></div>
            <div className="d-flex flex-column w-100 gap-2">
                <span className="btn btn-success" onClick={() => {setItemIndex([...itemIndex, 1])}}>+</span>
                <span className="btn btn-danger">-</span>
            </div>
        </div>
    )
}

export default NewItemRow