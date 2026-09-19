import './globals.css'
import type {Metadata} from 'next'
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Analytics} from "@vercel/analytics/next";
import {fraunces, inter} from "./fonts"

export const metadata: Metadata = {
  title: 'Sailsetters: Gemeinsam für ein bildungsgerechtes Deutschland',
  description:
    'Sailsetters ist ein studentischer Verein, der sich für Bildungsgerechtigkeit in Deutschland einsetzt.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main className="overflow-x-clip">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
