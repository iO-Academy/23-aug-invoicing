import React from "react";
import { useEffect, useState } from "react";

function InvoiceHead({ shopDetails }) {
  const [clientData, setClientData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchClients = async () => {
    const res = await fetch("https://invoicing-api.dev.io-academy.uk/clients");
    const data = await res.json();

    setClientData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div className="container d-flex">
      <div className="col-8 d-flex flex-column">
        <p className="fw-semibold mb-2">From</p>
        <div className="d-flex flex-column">
          <p className="m-0">{shopDetails.name}</p>
          <p className="m-0">{shopDetails.addressline1}</p>
          <p className="m-0">{shopDetails.addressline2}</p>
          <p className="m-0">{shopDetails.city}</p>
          <p className="fw-semibold mb-2 mt-3">To</p>
          <div className="col-6">
            <select
              class="form-select align-self-start"
              aria-label="Default select example"
            >
              <option selected>Select from client list</option>
              {loading
                ? null
                : clientData.data.map((client) => {
                    return (
                      <option value={client.id} key={client.id}>
                        {client.name}
                      </option>
                    );
                  })}
            </select>
          </div>
        </div>
      </div>
      <div className="col-4 d-flex flex-column">
        <p className="fw-semibold mb-2">Status</p>
        <p className="btn align-self-start m-0 pl-2 pr-2 d-flex align-items-center gap-2 btn-outline-warning">
          <i className="fa-solid fa-circle bullet"></i>
          Pending
        </p>
        <p className="fw-semibold mt-3 mb-2">Created</p>
        <p>12 July 2022</p>
        <p className="fw-semibold mt-1 mb-2">Due</p>
        <p>11 August 2022</p>
      </div>
    </div>
  );
}

export default InvoiceHead;
