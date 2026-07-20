"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PaymentsPage() {
  const router = useRouter();

  const [plan, setPlan] = useState<any>(null);
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    const selectedPlan = localStorage.getItem("selectedPlan");

    if (selectedPlan) {
      setPlan(JSON.parse(selectedPlan));
    }
  }, []);

  const handlePayment = () => {
    setPaid(true);

    setTimeout(() => {
      router.push("/dashboard");
    }, 3000);
  };

  if (paid) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-10 rounded-xl shadow-lg text-center">
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            Payment Successful ✅
          </h1>

          <p className="text-gray-600">
            Your subscription has been activated successfully.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Redirecting to Dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Subscription Payment
      </h1>

      <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">
          Selected Plan
        </h2>

        {plan ? (
          <>
            <p className="mb-2">
              <strong>Plan:</strong> {plan.name}
            </p>

            <p className="mb-4">
              <strong>Price:</strong> {plan.price}
            </p>

            <button
              onClick={handlePayment}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Pay Now
            </button>
          </>
        ) : (
          <p>No Plan Selected</p>
        )}
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-3">
          Previous Transactions
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3">Transaction ID</th>
              <th className="text-left p-3">Amount</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-3">TXN-1001</td>
              <td className="p-3">₹25,000</td>
              <td className="p-3 text-green-600">Success</td>
            </tr>

            <tr className="border-b">
              <td className="p-3">TXN-1002</td>
              <td className="p-3">₹18,000</td>
              <td className="p-3 text-green-600">Success</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}