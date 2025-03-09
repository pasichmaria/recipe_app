import "./globals.css";
import type React from "react";

import { Nunito } from "next/font/google";

import { Layout } from "@/shared";
import type { Metadata } from "next";

const nunito = Nunito({
  weight: "200",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Receipe app",
  description: "All your favorite recipes in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.className}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
