import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DotsBackground from "@/Components/DotsBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Priyanshu Singh - Portfolio",
  description: "Full Stack Developer & Creative Problem Solver",
  icons: {
    icon: '/images/Fav icon.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DotsBackground />
        {children}
      </body>
    </html>
  );
}
