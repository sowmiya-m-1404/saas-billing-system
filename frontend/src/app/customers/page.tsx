"use client";

import { useState } from "react";

export default function CustomersPage() {
  const [customers, setCustomers] = useState([
    {
      name: "Acme Corp",
      email: "admin@acme.com",
      phone: "+91 9876543210",
      status: "Active",
    },
    {
      name: "Tech Solutions",
      email: "contact@techsolutions.com",
      phone: "+91 9876501234",
      status: "Active",
    },
    {
      name: "Startup Hub",
      email: "hello@startuphub.com",
      phone: "+91 9988776655",
      status: "Trial",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newCustomer, setNewCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    status: "Active",
  });

  const handleAddCustomer = () => {
    if (
      !newCustomer.name ||
      !newCustomer.email ||
      !newCustomer.phone
    ) {
      alert("Please fill all fields");
      return;
    }

    setCustomers([...customers, newCustomer]);

    setNewCustomer({
      name: "",
      email: "",
      phone: "",
      status: "Active",
    });

    setShowForm(false);

    alert("Customer Added Successfully!");
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Customer Management
        </h1>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add Customer
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Add New Customer
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Customer Name"
              className="border p-3 rounded"
              value={newCustomer.name}
              onChange={(e) =>
                setNewCustomer({
                  ...newCustomer,
                  name: e.target.value,
                })
              }
            />

            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded"
              value={newCustomer.email}
              onChange={(e) =>
                setNewCustomer({
                  ...newCustomer,
                  email: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Phone"
              className="border p-3 rounded"
              value={newCustomer.phone}
              onChange={(e) =>
                setNewCustomer({
                  ...newCustomer,
                  phone: e.target.value,
                })
              }
            />

            <select
              className="border p-3 rounded"
              value={newCustomer.status}
              onChange={(e) =>
                setNewCustomer({
                  ...newCustomer,
                  status: e.target.value,
                })
              }
            >
              <option>Active</option>
              <option>Trial</option>
              <option>Inactive</option>
            </select>
          </div>

          <button
            onClick={handleAddCustomer}
            className="mt-4 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
          >
            Save Customer
          </button>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-md p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3">
                Customer Name
              </th>
              <th className="text-left p-3">
                Email
              </th>
              <th className="text-left p-3">
                Phone
              </th>
              <th className="text-left p-3">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{customer.name}</td>
                <td className="p-3">{customer.email}</td>
                <td className="p-3">{customer.phone}</td>
                <td className="p-3">{customer.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}