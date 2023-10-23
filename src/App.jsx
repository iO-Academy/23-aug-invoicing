import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [invoices, setInvoices] = useState({
    data: [{ invoice_id: "testinvoice" }],
  });

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
      <div>Hi</div>
      {invoices && console.log(invoices)}
    </>
  );
}

export default App;
