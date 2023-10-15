import './globals.css'
import type {Metadata} from 'next'
import React from "react";
import Navbar from "@/components/Navbar1";
import Footer from "@/components/Footer";
import {Analytics} from "@vercel/analytics/react";
import {inter} from "./fonts"

export const metadata: Metadata = {
  title: 'Sailsetters',
  description: 'Students for change',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
