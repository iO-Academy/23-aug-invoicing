import {useEffect, useState} from "react";

function InvoiceTable({invoice}) {
    const [invoiceDetails, setInvoiceDetails] = useState([{ invoice_id: "testinvoice" }]);

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
    return (
        <>
            <div className="App">
                <table>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Total </th>
                    </tr>

                </table>
            </div>
        </>
    )
}


export default InvoiceTable;