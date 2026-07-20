"use client";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-10 bg-white rounded-xl shadow-lg p-6">

      <div className="text-center">

        <h2 className="text-xl font-bold text-gray-800">
          SaaS Billing & Subscription System
        </h2>

        <p className="text-gray-500 mt-2">
          Enterprise Billing Management Platform
        </p>

        <div className="mt-6 space-y-2 text-gray-700">

          <p>
            👩‍💻 <strong>Developed By:</strong> Sowmiya M
          </p>

          <p>
            🎓 B.Tech Information Technology
          </p>

          <p>
            🏫 Anna University
          </p>

          <p className="flex justify-center items-center gap-2">
            <FaEnvelope />
            sowmiyasowmiya8401@gmail.com
          </p>

          <p className="flex justify-center items-center gap-2">
            <FaLinkedin />
            linkedin.com/in/sowmiya-m-9310b83b9
          </p>

          <p className="flex justify-center items-center gap-2">
            <FaGithub />
            github.com/sowmiya-m-1404  
          </p>

        </div>

        <hr className="my-6" />

        <p className="text-gray-500 text-sm">
          © 2026 SaaS Billing System. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}