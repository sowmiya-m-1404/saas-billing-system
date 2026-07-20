"use client";

import { useEffect, useState } from "react";
import api from "../../services/api";

export default function TestPage() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    api
      .get("/")
      .then((res) => {
        setMessage(JSON.stringify(res.data));
      })
      .catch(() => {
        setMessage("Backend Connection Failed");
      });
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Backend Test</h1>

      <p className="mt-4">{message}</p>
    </div>
  );
}