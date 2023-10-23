import { useState, useEffect } from "react";
import "./App.css";
import Header from './components/Header'

function App() {
  const [invoices, setInvoices] = useState(
    [{ invoice_id: "testinvoice" }]
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
      <div>Hi</div>
      {invoices && console.log(invoices)}
      {/*{console.log(invoices)}*/}
      <Header invoicesjson={invoices}/>
    </>
  );
}

export default App;
