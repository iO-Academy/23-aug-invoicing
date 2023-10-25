
function CreateNewInvoiceButton () {

// {formInput} coming from AJ.
    let formInput = {
        client: 1,
        total: 1500,
        details: [
            {
                quantity: 25,
                rate: 1500,
                total: 1500,
                description: "Optional text field"
            }
        ]
    }
    const sendData = async () => {
        let customSettings = {
            method: 'POST',
            body: JSON.stringify({formInput}), //turn obj into JSON format
            headers: {
                'Content-type': 'application/json' //state what type is being sent
            }
        }
        const response = await fetch(
            // "https://invoicing-api.dev.io-academy.uk/invoices", customSettings
            "http://localhost:8080/invoices", customSettings
        );
        console.log(response.status);
    }
    // sendData().catch(console.error);

    return (
        <>
            <button className="btn text-white bg-success" onClick={sendData}>
                Create invoice
            </button>
        </>
    )
}

export default CreateNewInvoiceButton



