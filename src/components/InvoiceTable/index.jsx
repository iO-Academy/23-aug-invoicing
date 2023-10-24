import {useEffect, useState} from "react";

function InvoiceTable({invoice}) {
    const [invoiceDetails, setInvoiceDetails] = useState({'details' : [{'description': 'test', 'quantity': '1', 'rate': 'test', 'total': 'test'}]});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://invoicing-api.dev.io-academy.uk/invoices/${invoice.id}`
            );
            const json = await response.json();
            setInvoiceDetails(json.data);
        };
        fetchData().catch(console.error);
    }, []);
        const details = invoiceDetails.details;
    console.log(details)
    const displayDetails = (item) =>
    {
        return(
        <tr>
            <td>{item.description}</td>
            <td>{item.quantity}</td>
            <td>{item.rate}</td>
            <td>£{item.total}</td>
        </tr>
        )
    }
    return (
        <>
            <div className="App">
                <table>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Total</th>
                    </tr>
                    {details.map(displayDetails)}
                </table>
            </div>
        </>
    )
}


export default InvoiceTable;