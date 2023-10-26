import { useState, useEffect } from "react";
import "./App.css";
import InvoiceContainer from "./components/InvoiceContainer";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";

function App() {
  const [filterStatus, setFilterStatus] = useState();
  const INVOICE_URL = `https://invoicing-api.dev.io-academy.uk/invoices`;

  const [loading, setLoading] = useState(true);

  const [invoices, setInvoices] = useState([
    { id: "143", invoice_id: "testinvoice" },
  ]);

  const fetchAllData = async () => {
    const response = await fetch(INVOICE_URL);
    const json = await response.json();
    setInvoices(json.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchAllData().catch(console.error);
  }, []);

  const fetchFilteredData = async (status) => {
    const response = await fetch(INVOICE_URL + "?status=" + status);
    const json = await response.json();
    setInvoices(json.data);
    setLoading(false);
  };

  useEffect(() => {
    if (filterStatus == 0) {
      fetchAllData().catch(console.error);
    } else {
      fetchFilteredData(filterStatus).catch(console.error);
    }
  }, [filterStatus]);

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
              setFilterStatus={setFilterStatus}
            />
          </div>
        </div>
        <InvoiceContainer
          invoices={invoices}
          shopDetails={shopDetails}
          filterStatus={filterStatus}
        />
        <Footer />
      </>
    );
  }
}
export default App;
