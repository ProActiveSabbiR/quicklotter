
import { Inter } from "next/font/google";
import Link from 'next/link';
import Header from "./components/header";
import "./globals.css";

// Load the Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quicklotter",
  description: "Platform for lottery enthusiasts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}



