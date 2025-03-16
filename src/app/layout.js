import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashCursor from "@/components/SplashCursor/SplashCursor";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Beat Coder",
  description: "We Build modern web applications with cutting-edge technology and innovative solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='from-gray-900 via-slate-800 to-gray-900 '>
        {/* <SplashCursor /> */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}