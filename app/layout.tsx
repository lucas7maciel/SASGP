import type { Metadata } from "next";
import { Nunito_Sans, Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SASGP",
  description: "Soluções ágeis para sua empresa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.className} ${nunito.className} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 flex justify-center items-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
