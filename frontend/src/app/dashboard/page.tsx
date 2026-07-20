"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "../../components/footer";

import {
  FaBuilding,
  FaFileInvoiceDollar,
  FaMoneyBillWave,
  FaUsers,
} from "react-icons/fa";

import { MdSubscriptions } from "react-icons/md";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { getDashboardStats } from "../../services/api";

export default function DashboardPage() {
  const router = useRouter();

  const [authorized, setAuthorized] = useState(false);

  const [stats, setStats] = useState({
    organizations: 0,
    customers: 0,
    products: 0,
    invoices: 0,
    revenue: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    setAuthorized(true);

    getDashboardStats()
      .then((data) => {
        setStats(data);
      })
      .catch((error) => {
        console.error("Dashboard Error:", error);
      });
  }, [router]);

  const cards = [
    {
      title: "Organizations",
      value: stats.organizations,
      description: "Total Organizations",
      icon: <FaBuilding size={28} />,
      color: "bg-blue-500",
      path: "/organizations",
    },
    {
      title: "Products",
      value: stats.products,
      description: "Available Products",
      icon: <MdSubscriptions size={28} />,
      color: "bg-green-500",
      path: "/plans",
    },
    {
      title: "Revenue",
      value: `₹${Number(stats.revenue || 0).toLocaleString()}`,
      description: "Total Revenue",
      icon: <FaMoneyBillWave size={28} />,
      color: "bg-purple-500",
      path: "/analytics",
    },
    {
      title: "Invoices",
      value: stats.invoices,
      description: "Generated Invoices",
      icon: <FaFileInvoiceDollar size={28} />,
      color: "bg-red-500",
      path: "/invoices",
    },
  ];

  const barData = [
    {
      name: "Organizations",
      value: stats.organizations,
    },
    {
      name: "Products",
      value: stats.products,
    },
    {
      name: "Invoices",
      value: stats.invoices,
    },
  ];

  const pieData = [
    {
      name: "Revenue",
      value: stats.revenue,
    },
    {
      name: "Invoices",
      value: stats.invoices,
    },
  ];

  const COLORS = ["#7C3AED", "#EF4444"];

  if (!authorized) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">
          Loading Dashboard...
        </h1>
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 min-h-screen bg-gray-100 p-8 overflow-auto">
        <Navbar />

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              👋 Welcome, Admin
            </h1>

            <p className="text-gray-600 mt-2">
              Manage your SaaS Billing & Subscription System efficiently.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md px-6 py-4 text-right">
            <p className="text-gray-500 text-sm">
              Today's Date
            </p>

            <h2 className="font-bold text-lg">
              {new Date().toLocaleDateString()}
            </h2>
          </div>
        </div>

        {/* Dashboard Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              onClick={() => router.push(card.path)}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-full ${card.color} flex items-center justify-center text-white mb-5`}
              >
                {card.icon}
              </div>

              <p className="text-gray-500 text-lg">
                {card.title}
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {card.value}
              </h2>

              <p className="text-sm text-gray-400 mt-2">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Charts */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          {/* Bar Chart */}

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-5">
              Business Statistics
            </h2>

            <ResponsiveContainer
              width="100%"
              height={320}
            >
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="value"
                  fill="#3B82F6"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-5">
              Revenue Analytics
            </h2>

            <ResponsiveContainer
              width="100%"
              height={320}
            >
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  outerRadius={110}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />

                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Summary */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">
              Project Overview
            </h2>

            <div className="space-y-3 text-gray-700">

              <div className="flex items-center gap-3">
                <FaBuilding className="text-blue-500" />
                <span>
                  Organizations : <strong>{stats.organizations}</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaUsers className="text-green-500" />
                <span>
                  Customers : <strong>{stats.customers}</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MdSubscriptions className="text-purple-500" />
                <span>
                  Products : <strong>{stats.products}</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaFileInvoiceDollar className="text-red-500" />
                <span>
                  Invoices : <strong>{stats.invoices}</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaMoneyBillWave className="text-yellow-500" />
                <span>
                  Revenue : <strong>₹{Number(stats.revenue || 0).toLocaleString()}</strong>
                </span>
              </div>

            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl shadow-lg p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">
              SaaS Billing System
            </h2>

            <p className="leading-8">
              This dashboard provides a complete overview of your
              Billing & Subscription Management System. Track
              organizations, customers, invoices, products and
              revenue from one place.
            </p>
          </div>

        </div>

        {/* Project Status */}

        <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-5">
            System Status
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700">

            <p>✅ Secure JWT Authentication</p>

            <p>✅ PostgreSQL Connected</p>

            <p>✅ Customer Management</p>

            <p>✅ Product Management</p>

            <p>✅ Invoice Management</p>

            <p>✅ Payment Management</p>

            <p>✅ Dashboard Analytics</p>

            <p>✅ Swagger API Documentation</p>

          </div>
        </div>

      </div>
    </div>
  );
}