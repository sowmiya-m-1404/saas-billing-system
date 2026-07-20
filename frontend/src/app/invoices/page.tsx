"use client";

import { useState } from "react";

export default function InvoicesPage() {
  const [customer, setCustomer] = useState("");
  const [amount, setAmount] = useState("");
  const [gst, setGst] = useState("18");

  const [invoices, setInvoices] = useState([
    {
      customer: "Acme Corp",
      amount: 10000,
      gst: 18,
      total: 11800,
    },
  ]);

  const subtotal = Number(amount) || 0;
  const gstAmount = (subtotal * Number(gst)) / 100;
  const totalAmount = subtotal + gstAmount;

  const generateInvoice = () => {
    if (!customer || !amount) {
      alert("Please fill all fields");
      return;
    }

    setInvoices([
      ...invoices,
      {
        customer,
        amount: subtotal,
        gst: Number(gst),
        total: totalAmount,
      },
    ]);

    setCustomer("");
    setAmount("");
    setGst("18");

    alert("Invoice Generated Successfully!");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Invoice Management
      </h1>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Generate Invoice
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Customer Name"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            className="border p-3 rounded"
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-3 rounded"
          />

          <select
            value={gst}
            onChange={(e) => setGst(e.target.value)}
            className="border p-3 rounded"
          >
            <option value="5">5% GST</option>
            <option value="12">12% GST</option>
            <option value="18">18% GST</option>
            <option value="28">28% GST</option>
          </select>
        </div>

        <div className="mt-4 bg-gray-100 p-4 rounded">
          <p>Subtotal: ₹{subtotal}</p>
          <p>GST: ₹{gstAmount}</p>
          <p className="font-bold">
            Total: ₹{totalAmount}
          </p>
        </div>

        <button
          onClick={generateInvoice}
          className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Generate Invoice
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">
          Generated Invoices
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3">Customer</th>
              <th className="text-left p-3">Amount</th>
              <th className="text-left p-3">GST %</th>
              <th className="text-left p-3">Total</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{invoice.customer}</td>
                <td className="p-3">₹{invoice.amount}</td>
                <td className="p-3">{invoice.gst}%</td>
                <td className="p-3 font-semibold">
                  ₹{invoice.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}