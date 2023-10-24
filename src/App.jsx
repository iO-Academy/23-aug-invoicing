import { useState, useEffect } from "react";
import "./App.css";
import InvoiceContainer from "./components/InvoiceContainer";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";

function App() {
  const [invoices, setInvoices] = useState([{ invoice_id: "testinvoice" }]);

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

  const shopDetails = {
    name: 'Matthew Thompson',
    addressline1: 'Matthew\'s Den',
    addressline2: 'Keynsham',
    city: 'New York City'
  }

  return (
    <>
      <div className="container row d-flex align-items-end justify-content-center m-auto mb-3">
        <div className="col-md">
          <Header invoicesjson={invoices} />
        </div>
        <div className="col-md">
          <Toolbar />
        </div>
      </div>
      <InvoiceContainer invoices={invoices} shopDetails={shopDetails} />
      <Footer />
    </>
  );
}
export default App;