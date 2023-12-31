import { useEffect, useState } from "react";

function InvoiceTable({ invoiceDetails }) {
  console.log(invoiceDetails);

  const details = invoiceDetails.details;
  const displayDetails = (item, key) => {
    return (
      <tr key={key}>
        <td>{item.description}</td>
        <td>{item.quantity}</td>
        <td>{item.rate}</td>
        <td>£{item.total}</td>
      </tr>
    );
  };

  const calculatedTotal = details.reduce(
    (total, current) => total + Number(current.total),
    0
  );

  return (
    <>
      <div className="App">
        <table className="table w-100">
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody className="table-group-divider border-secondary-subtle">
            {details.map(displayDetails)}
            <tr>
              <td colSpan="2" className="text-end">
                Total
              </td>
              <td colSpan="2" className="fw-bold text-end">
                £{calculatedTotal}
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="text-end">
                Paid to date
              </td>
              <td colSpan="2" className="fw-bold text-end">
                £{invoiceDetails.paid_to_date}
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="fw-bold text-end bg-warning">
                Total due
              </td>
              <td colSpan="2" className="fw-bold text-end bg-warning">
                £{invoiceDetails.invoice_total}
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3">Payments due within 30 days</p>
      </div>
    </>
  );
}

export default InvoiceTable;
