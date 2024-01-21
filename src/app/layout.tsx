"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react"

const DisableNavbar = ["/login", "/register"];
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html>
      <body>
        <SessionProvider>
        {!DisableNavbar.includes(pathname) && <Navbar />}
        <div>{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
