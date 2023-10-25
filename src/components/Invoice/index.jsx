import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "../../index.css";

import InvoiceTable from "../InvoiceTable/index.jsx";
import GeneralInvoiceData from "../GeneralInvoiceData/index.jsx";

function Invoice({ invoice, shopDetails }) {
  const {
    id,
    invoice_id,
    name,
    due,
    invoice_total,
    status,
    details,
    status_name,
  } = invoice;

  const [show, setShow] = useState(false);
  const [idForModal, setIdForModal] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setIdForModal(id);
    setShow(true);
  };

  const [invoiceDetails, setInvoiceDetails] = useState({
    name: "Dummy",
    street_address: "Dummy",
    city: "Dummy",
    created: "Dummy",
    due: "Dummy",
    details: [
      {
        description: "test",
        quantity: "1",
        rate: "test",
        total: "test",
      },
    ],
  });

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

  const statusClass = () => {
    if (status_name === "Pending") {
      return "btn-outline-warning";
    } else if (status_name === "Cancelled") {
      return "btn-outline-secondary";
    } else if (status_name === "Paid") {
      return "btn-outline-success";
    } else {
      return "btn-outline-danger";
    }
  };

  const formattedDate = new Date(due).toLocaleDateString("en-gb", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <div
        className="border m-2 p-2 d-flex flex-row flex-wrap justify-content-between invoice-click"
        onClick={() => {
          handleShow(invoice_id);
        }}
      >
        <p className="fw-bold m-0 small">#{invoice_id}</p>
        <p className="m-0 small text-secondary">Due {formattedDate}</p>
        <p className="m-0 small text-secondary fw-semibold">{name}</p>
        <p className="fw-bold w-50 m-0">{"£ " + invoice_total}</p>
        <div className="d-flex align-items-center gap-3">
          <p
            className={
              "btn m-0 p-1 d-flex align-items-center gap-2 align-self-end " +
              statusClass()
            }
          >
            <i className="fa-solid fa-circle bullet"></i>
            {status_name}
          </p>
          <i className="fa-solid fa-chevron-right d-none d-lg-block"></i>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Invoice #{idForModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GeneralInvoiceData
            status_name={status_name}
            due={due}
            statusClass={statusClass}
            invoiceDetails={invoiceDetails}
            shopDetails={shopDetails}
          />
          <InvoiceTable invoiceDetails={invoiceDetails} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default Invoice;
