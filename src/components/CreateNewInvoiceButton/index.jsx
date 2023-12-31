function CreateNewInvoiceButton({ invoiceObj, total, clientId }) {
  let formInput = {
    client: clientId,
    total: total,
    details: invoiceObj,
  };

  const sendData = async () => {
    const INVOICE_URL = "https://invoicing-api.dev.io-academy.uk/invoices";
    let customSettings = {
      method: "POST",
      body: JSON.stringify(formInput), //turn obj into JSON format
      headers: {
        "Content-Type": "application/json", //state what type is being sent
      },
    };
    const response = await fetch(INVOICE_URL, customSettings);

    console.log(response.status);
    if (response.status === 200) {
      alert("Successfully created new invoice.");
    } else if (response.status === 400) {
      alert("Invalid invoice data.");
    } else {
      alert(
        "Unable to create invoice, check the DB as it may have stored part of the new invoice."
      );
    }
  };

  return (
    <>
      <button className="btn text-white bg-success" onClick={sendData}>
        Create invoice
      </button>
    </>
  );
}

export default CreateNewInvoiceButton;
