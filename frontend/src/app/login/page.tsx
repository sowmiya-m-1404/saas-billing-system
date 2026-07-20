"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleLogin } from "@react-oauth/google";
import { login } from "../../services/api";
import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    try {
      const data = await login(email, password);

      if (data.access_token) {
        localStorage.setItem("token", data.access_token);

        alert("Login Successful!");

        router.push("/dashboard");
      } else {
        alert(data.message || "Login Failed");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };
  return (
  <div className="min-h-screen flex">

    {/* Left Panel */}

    <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-700 to-indigo-900 text-white flex-col justify-center px-16">

      <h1 className="text-5xl font-bold mb-6">
        SaaS Billing System
      </h1>

      <p className="text-xl text-blue-100 leading-9">
        Manage Organizations, Customers, Products,
        Invoices, Payments and Analytics in one
        professional platform.
      </p>

      <div className="mt-12 space-y-4 text-lg">
        <p>✔ Multi Tenant Billing</p>
        <p>✔ Secure JWT Authentication</p>
        <p>✔ Invoice Management</p>
        <p>✔ Payment Tracking</p>
        <p>✔ Business Analytics</p>
      </div>

    </div>

    {/* Login */}

    <div className="flex-1 flex items-center justify-center bg-gray-100">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-10">

        <h2 className="text-3xl font-bold text-center text-gray-800">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Sign in to continue
        </p>

        <div className="relative mb-5">

          <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full border rounded-lg pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

        </div>

        <div className="relative mb-6">

          <FaLock className="absolute left-4 top-4 text-gray-400" />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full border rounded-lg pl-12 pr-12 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="button"
            onClick={()=>setShowPassword(!showPassword)}
            className="absolute right-4 top-4 text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>

        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          {loading ? "Signing In..." : "Login"}
        </button>

        <div className="my-6 text-center text-gray-500">
          OR
        </div>

        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              localStorage.setItem(
                "google_token",
                credentialResponse.credential || ""
              );
              router.push("/dashboard");
            }}
            onError={() => {
              alert("Google Login Failed");
            }}
          />
        </div>

      </div>

    </div>

  </div>
);
}