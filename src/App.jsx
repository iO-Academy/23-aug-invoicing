import { useState, useEffect } from "react";
import "./App.css";
import InvoiceContainer from "./components/InvoiceContainer";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";

function App() {
  const INVOICE_URL = `https://invoicing-api.dev.io-academy.uk/invoices`;

  const [loading, setLoading] = useState(true);

  const [invoices, setInvoices] = useState([
    { id: "143", invoice_id: "testinvoice" },
  ]);

  const [statusDropDown, setstatusDropDown] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(INVOICE_URL);
      const json = await response.json();
      setInvoices(json.data);
      setLoading(false);
    };

    fetchData().catch(console.error);
  }, []);

  const shopDetails = {
    name: "Matthew Thompson",
    addressline1: "Matthew's Den",
    addressline2: "Keynsham",
    city: "New York City",
  };

  if (loading) {
    return (
      <>
        <div className="container row d-flex align-items-end justify-content-center m-auto mb-3">
          <div className="col-md">
            <Header invoicesjson={invoices} />
          </div>
          <div className="col-md">
            <Toolbar shopDetails={shopDetails} />
          </div>
          <div className="d-flex justify-content-center mt-5">Loading</div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container row d-flex align-items-end justify-content-center m-auto mb-3">
          <div className="col-md">
            <Header invoicesjson={invoices} />
          </div>
          <div className="col-md">
            <Toolbar
              shopDetails={shopDetails}
              statusDropDown={statusDropDown}
              setstatusDropDown={setstatusDropDown}
            />
          </div>
        </div>
        <InvoiceContainer
          invoices={invoices}
          shopDetails={shopDetails}
          statusDropDown={statusDropDown}
          setstatusDropDown={setstatusDropDown}
        />
        <Footer />
      </>
    );
  }
}
export default App;
