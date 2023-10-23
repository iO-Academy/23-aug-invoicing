import { useState, useEffect } from "react";
import "./App.css";
import InvoiceContainer from "./components/InvoiceContainer.jsx";

function App() {
  const [invoices, setInvoices] = useState([{ invoice_id: "testinvoice" }],
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://invoicing-api.dev.io-academy.uk/invoices"
      );
      const json = await response.json();
      setInvoices(json.data);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <InvoiceContainer invoices={invoices}/>
    </>
  );
}

export default App;
