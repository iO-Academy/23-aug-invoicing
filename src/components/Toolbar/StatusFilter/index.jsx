import { useState, useEffect } from "react";

function StatusFilter() {
  const [status, setStatus] = useState();
  const [loading, setLoading] = useState(true);

  const fetchStatus = async () => {
    const res = await fetch("https://invoicing-api.dev.io-academy.uk/invoices");
    const data = await res.json();
    setStatus(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchStatus();
    // if (!loading) {
    //   let statusArray = [];
    //   let statuses = status.data.status_name.filter((status_name) => {
    //     return !statusArray.includes(status_name);
    //   });
    // }
  }, []);

  if (!loading) {
    let stuff = [];
    status.data.map((item) => {
      stuff.push({ status: item.status, name: item.status_name });
    });

    let newStuff = [];
    // console.log(newStuff.includes({ status: "3", name: "Cancelled" }));

    stuff.map((one_stuff, index) => {
      if (newStuff[index]) {
        if (newStuff[index].status !== one_stuff.status) {
          newStuff.push(one_stuff);
        }
      }
    });

    console.log(newStuff);
  }

  return (
    <>
      <select
        className="form-select align-self-start border-0 w-auto fw-bold"
        aria-label="Default select example"
      >
        <option selected>Filter by Status</option>
        <option>Test</option>
      </select>
    </>
  );
}

export default StatusFilter;
