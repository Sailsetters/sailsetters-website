import './globals.css'
import type {Metadata} from 'next'
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Analytics} from "@vercel/analytics/next";
import {inter} from "./fonts"

export const metadata: Metadata = {
  title: 'Sailsetters – Gemeinsam für ein bildungsgerechtes Deutschland',
  description:
    'Sailsetters ist ein studentischer Verein, der sich für Bildungsgerechtigkeit in Deutschland einsetzt.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
