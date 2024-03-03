import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "theweekendcoders.",
  description: "Freelancing company that provides Ecommerce Solutions and custom web solutions to the clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-hero-pattern-mobile bg-scroll lg:bg-hero-pattern lg:bg-cover lg:bg-opacity-25 lg:bg-fixed">
      <body className={`${inter.className}  2xl:max-w-screen-2xl mx-auto overflow-y-scroll`}>{children}</body>
    </html>
  );
}
