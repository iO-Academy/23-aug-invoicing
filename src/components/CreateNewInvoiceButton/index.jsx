function CreateNewInvoiceButton({invoiceObj}) {

    // const calculatedTotal = invoiceObj.reduce((invoice, currentValue) => invoice + currentValue, 0);



    let formInput = {
        "client": 4,
        "total": calculatedTotal,
        "details": invoiceObj
    }

    console.log(JSON.stringify(formInput));

    const sendData = async () => {
        let customSettings = {
            method: 'POST',
            body: JSON.stringify(formInput), //turn obj into JSON format
            headers: {
                'Content-Type': 'application/json' //state what type is being sent
            }
        }
        const response = await fetch(
            // "https://invoicing-api.dev.io-academy.uk/invoices", customSettings
            "http://localhost:8080/invoices", customSettings
        );

        console.log(response.status);
        if (response.status === 200) {
            alert("Successfully created new invoice.");
        } else if (response.status === 400) {
            alert("Invalid invoice data.");
        } else {
            alert("Unable to create invoice, check the DB as it may have stored part of the new invoice.");
        }
    }

    return (
        <>
            <button className="btn text-white bg-success" onClick={sendData}>
                Create invoice
            </button>
        </>
    )
}

export default CreateNewInvoiceButton