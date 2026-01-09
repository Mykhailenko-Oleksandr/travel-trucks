import "modern-normalize";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TravelTrucks",
  description:
    "Rent modern campervans and trucks for your next adventure. TravelTrucks offers flexible booking, affordable prices, and reliable vehicles.",
  openGraph: {
    title: "TravelTrucks – Campervan & Truck Rental",
    description:
      "Book your campervan or truck easily with TravelTrucks. Explore new destinations with comfort and reliability.",
    url: "https://travel-trucks-opal-omega.vercel.app/",
    images: [
      {
        url: "/images/hero.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <TanStackProvider>
          <Header />

          <main>{children}</main>

          <Toaster />
          <ReactQueryDevtools initialIsOpen={false} />
        </TanStackProvider>
      </body>
    </html>
  );
}
