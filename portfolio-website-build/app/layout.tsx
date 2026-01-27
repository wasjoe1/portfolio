import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Joe Chua | Software Engineer',
  description: 'Final-year CS student at NUS. Seeking Software Engineering roles starting Summer 2026. Experience at Squarepoint, August Robotics, and PointStar.',
  generator: 'v0.app',
  icons: {
    icon: '/logos/chicago_bean_outline.png',
    apple: '/logos/chicago_bean_outline.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
