"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AnalyticsPage() {
  const metrics = [
    {
      title: "Total Revenue",
      value: "₹5,75,000",
    },
    {
      title: "Active Customers",
      value: "125",
    },
    {
      title: "Active Subscriptions",
      value: "48",
    },
    {
      title: "Growth Rate",
      value: "+18%",
    },
  ];

  const revenueData = [
    { month: "Jan", revenue: 45000 },
    { month: "Feb", revenue: 52000 },
    { month: "Mar", revenue: 61000 },
    { month: "Apr", revenue: 70000 },
    { month: "May", revenue: 85000 },
    { month: "Jun", revenue: 95000 },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Analytics Dashboard
      </h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div
            key={metric.title}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h2 className="text-gray-500">
              {metric.title}
            </h2>

            <p className="text-3xl font-bold mt-3">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      {/* Revenue Chart */}
      <div className="mt-8 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">
          Revenue Trend
        </h2>

        <div style={{ width: "100%", height: 350 }}>
          <ResponsiveContainer>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#2563eb"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Business Insights */}
      <div className="mt-8 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">
          Business Insights
        </h2>

        <ul className="space-y-2">
          <li>📈 Revenue increased by 18% this month</li>
          <li>👥 125 active customers onboarded</li>
          <li>💳 48 active subscriptions running</li>
          <li>🧾 Invoice collection rate: 92%</li>
        </ul>
      </div>
    </div>
  );
}