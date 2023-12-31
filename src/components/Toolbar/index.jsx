import { useState } from "react";
import PlusIcon from "../ui/PlusIcon";
import Modal from "react-bootstrap/Modal";
import NewItemForm from "../NewItemForm/index.jsx";
import InvoiceHead from "../InvoiceHead";
import StatusDropdown from "./StatusFilter";

function Toolbar({ shopDetails, setFilterStatus }) {
  const [show, setShow] = useState(false);
  const [clientId, setClientId] = useState(1);
  return (
    <>
      <div className="row my-4 my-sm-0 mx-0">
        <div className="col d-flex justify-content-start p-0">
          {/* <button className="btn dropdown-toggle btn-sm">Sort by</button> */}
          <StatusDropdown setFilterStatus={setFilterStatus} />
        </div>
        <div className="col d-flex justify-content-end p-0">
          <button
            className="btn btn-info text-white d-inline btn-sm d-flex align-items-center"
            onClick={() => {
              setShow(true);
            }}
          >
            <PlusIcon />
            New Invoice
          </button>
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>New invoice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InvoiceHead shopDetails={shopDetails} setClientId={setClientId} />
          <NewItemForm clientId={clientId} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default Toolbar;
