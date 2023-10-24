import React from "react";
import "../../index.css";

const GeneralInvoiceData = ({ due, status_name, statusClass }) => {
  const modDate = (due, dayDiff) => {
    const dueDate = new Date(due);
    dueDate.setDate(dueDate.getDate() - dayDiff);
    return dueDate.toLocaleDateString("en-gb", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="container d-flex justify-content-between px-0">
      <div className="px-0 mx-lg-5">
        <p className="fw-bold mb-2">From</p>
        <p className="m-0">Mathhew Thompson</p>
        <p className="m-0">Matthew's Den</p>
        <p className="m-0">Keynsham</p>
        <p className="m-0">New York</p>
        <p className="fw-bold mt-3 mb-2">To</p>
        <p className="m-0">Neil Hughson</p>
        <p className="m-0">1 Manchester Road</p>
        <p className="m-0">Penthouse</p>
        <p className="m-0">Manchester</p>
      </div>
      <div className="px-4 mx-2 mx-lg-5 px-lg-5">
        <p className="fw-bold mb-2">Status</p>
        <div className="d-flex align-items-center gap-3">
          <p
            className={
              "btn m-0 p-1 d-flex align-items-center gap-2 align-self-end " +
              statusClass()
            }
          >
            <i class="fa-solid fa-circle bullet"></i>
            {status_name}
          </p>
        </div>
        <p className="fw-bold mb-2 mt-3">Created</p>
        <p className="m-0">{modDate(due, 30)}</p>
        <p className="fw-bold mb-2 mt-3">Due</p>
        <p className="m-0">{modDate(due, 0)}</p>
      </div>
    </div>
  );
};

export default GeneralInvoiceData;
