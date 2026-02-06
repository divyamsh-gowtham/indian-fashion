import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Bay’r",
  description: "Independent Indian fashion discovery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main className="pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
