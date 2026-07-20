"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FaTachometerAlt,
  FaBuilding,
  FaUsers,
  FaBoxOpen,
  FaFileInvoiceDollar,
  FaMoneyBillWave,
  FaChartBar,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Organizations",
      path: "/organizations",
      icon: <FaBuilding />,
    },
    {
      name: "Customers",
      path: "/customers",
      icon: <FaUsers />,
    },
    {
      name: "Products",
      path: "/plans",
      icon: <FaBoxOpen />,
    },
    {
      name: "Invoices",
      path: "/invoices",
      icon: <FaFileInvoiceDollar />,
    },
    {
      name: "Payments",
      path: "/payments",
      icon: <FaMoneyBillWave />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <FaChartBar />,
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white flex flex-col shadow-xl">

      {/* Logo */}

      <div className="p-6 border-b border-slate-700">

        <h1 className="text-2xl font-bold text-center">
          💼 SaaS Billing
        </h1>

        <p className="text-center text-gray-400 text-sm mt-2">
          Billing Management System
        </p>

      </div>

      {/* Menu */}

      <div className="flex-1 p-4">

        <ul className="space-y-2">

          {menuItems.map((item) => (

            <li key={item.name}>

              <Link
                href={item.path}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300
                ${
                  pathname === item.path
                    ? "bg-blue-600 text-white shadow-lg"
                    : "hover:bg-slate-700 text-gray-300"
                }`}
              >
                <span className="text-lg">
                  {item.icon}
                </span>

                <span>
                  {item.name}
                </span>

              </Link>

            </li>

          ))}

        </ul>

      </div>

      {/* Footer */}

      <div className="p-4 border-t border-slate-700">

        <button
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 rounded-lg p-3 transition"
        >
          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </div>
  );
}