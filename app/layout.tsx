import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import BottomNav from "@/components/BottomNav";
import RequestModal from "@/components/RequestModal";
import ClientProviders from "@/components/ClientProviders";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Cozy Masters",
  description: "Find trusted specialists nearby",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        className={`
          ${manrope.variable}
          font-sans
          antialiased
          bg-stone-50
          min-h-screen
          relative
        `}
      >
        <ClientProviders>
          {children}
          <BottomNav />
          <RequestModal />
        </ClientProviders>
      </body>
    </html>
  );
}
