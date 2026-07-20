"use client";

import { useRouter } from "next/navigation";

export default function PlansPage() {
  const router = useRouter();

  const plans = [
    {
      name: "Basic",
      price: "₹999/month",
      features: ["5 Users", "10 Invoices", "Email Support"],
    },
    {
      name: "Pro",
      price: "₹2,999/month",
      features: ["25 Users", "Unlimited Invoices", "Priority Support"],
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      features: [
        "Unlimited Users",
        "Custom Integrations",
        "Dedicated Support",
      ],
    },
  ];

  const choosePlan = (plan: any) => {
    localStorage.setItem("selectedPlan", JSON.stringify(plan));
    router.push("/payments");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Subscription Plans
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h2 className="text-2xl font-bold mb-2">
              {plan.name}
            </h2>

            <p className="text-blue-600 text-xl mb-4">
              {plan.price}
            </p>

            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature}>✅ {feature}</li>
              ))}
            </ul>

            <button
              onClick={() => choosePlan(plan)}
              className="mt-6 w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}