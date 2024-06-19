import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@fontsource/roboto/700.css';
import RootProvider from "@/util/common/RootProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "พูดคุยกันเรื่องเกมส์ ROV | ROV-PRO.COM",
  description: "ร่วมพูดคุยกันเรื่องเกม ROV เทคนิกส์การเล่น การออกไอเทม กับหลายๆคน",
  keywords: "rov, rov-pro, เกม rov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootProvider>
          {children}
        </RootProvider>
        </body>
    </html>
  );
}
