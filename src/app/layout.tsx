import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Was it raining at Open'er Festival?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {children}
      </body>
    </html>
  );
}
