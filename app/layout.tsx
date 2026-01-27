import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './styles/global.scss';
import Header from "@/partials/Header";
import Footer from "@/partials/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sage Consultancy LLC",
  description: "Your successful migration starts here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <link rel="icon" href="/images/logo-gold-alone.png" />
    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
