import type { Metadata } from "next";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "SaaS Billing System",
  description: "Enterprise Billing & Subscription Management Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <GoogleOAuthProvider
          clientId={
            process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""
          }
        >
          {children}

          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 3000,
              style: {
                background: "#1e293b",
                color: "#ffffff",
                borderRadius: "10px",
                padding: "12px",
                fontSize: "14px",
              },
              success: {
                style: {
                  background: "#16a34a",
                  color: "#ffffff",
                },
              },
              error: {
                style: {
                  background: "#dc2626",
                  color: "#ffffff",
                },
              },
            }}
          />
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}