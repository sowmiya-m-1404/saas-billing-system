"use client";

import {
  FaBell,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="bg-white shadow-lg rounded-xl px-6 py-4 mb-8 flex justify-between items-center">

      {/* Left Section */}

      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          SaaS Billing System
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          Billing & Subscription Management Platform
        </p>
      </div>

      {/* Right Section */}

      <div className="flex items-center gap-6">

        {/* Date */}

        <div className="hidden md:block text-right">
          <p className="text-sm text-gray-500">
            Today
          </p>

          <h2 className="font-semibold">
            {new Date().toLocaleDateString()}
          </h2>
        </div>

        {/* Notification */}

        <button className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
          <FaBell size={20} className="text-gray-700" />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-1.5">
            3
          </span>
        </button>

        {/* User */}

        <div className="flex items-center gap-2">
          <FaUserCircle
            size={34}
            className="text-blue-600"
          />

          <div>
            <p className="font-semibold">
              Admin
            </p>

            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>
        </div>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          <FaSignOutAlt />

          Logout
        </button>

      </div>
    </div>
  );
}