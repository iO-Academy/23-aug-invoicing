import { useState, useEffect } from "react";

function StatusFilter({ setFilterStatus }) {
  const [status, setStatus] = useState();
  const [loading, setLoading] = useState(true);

  const INVOICE_URL = "https://invoicing-api.dev.io-academy.uk/invoices";

  const fetchStatus = async () => {
    const res = await fetch(INVOICE_URL);
    const data = await res.json();
    setStatus(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  let completeStatus = [];

  if (!loading) {
    let newStatusArray = [];
    status.data.map((item) => {
      newStatusArray.push({ status: item.status, name: item.status_name });
    });

    let statusNumber = [];

    newStatusArray.map((item) => {
      if (statusNumber.includes(item.status) === false) {
        statusNumber.push(item.status);
      }
    });

    let statusName = [];
    newStatusArray.map((item) => {
      if (statusName.includes(item.name) === false) {
        statusName.push(item.name);
      }
    });

    completeStatus = statusNumber.map((number, index) => {
      return { name: statusName[index], number: number };
    });

		completeStatus.sort((a, b) => a.name.localeCompare(b.name));
		
  }

  if (!loading) {
    return (
      <>
        <select
          className="form-select align-self-start border-0 w-auto fw-bold"
          aria-label="Default select example"
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option selected disabled>Filter by Status</option>
          <option value="0">All invoices</option>
          {completeStatus.map((status) => {
            return <option value={status.number}>{status.name}</option>;
          })}
        </select>
      </>
    );
  }
}

export default StatusFilter;
