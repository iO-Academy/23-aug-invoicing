import { useState, useEffect } from "react";
import "../index.css";

function Invoice ({ invoice }) {
  const { id, invoice_id, name, due, invoice_total, status, status_name } =
    invoice;

  function statusClass() {
    if (status_name === "Pending") {
      return "btn-outline-warning";
    } else if (status_name === "Cancelled") {
      return "btn-outline-secondary";
    } else if (status_name === "Paid") {
      return "btn-outline-success";
    } else {
      return "btn-outline-danger";
    }
  }

  const formattedDate = new Date(due).toLocaleDateString("en-gb", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="border m-2 p-2 d-flex flex-row flex-wrap justify-content-between">
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
          <i class="fa-solid fa-circle bullet"></i>
          {status_name}
        </p>
        <i class="fa-solid fa-chevron-right d-none d-lg-block"></i>
      </div>
    </div>
  );
};

export default Invoice;
