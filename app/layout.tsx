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
  description: "Soluções ágeis para a sua empresa!",
  openGraph: {
    images: [
      {
        url: `${process.env.BASE_URL}/Logo.png`,
        width: 1200,
        height: 630,
        alt: "SASGP - Logo",
        type: "image/png",
      },
    ],
  },
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
        <div className="flex-1 flex justify-center items-center mt-[80px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
