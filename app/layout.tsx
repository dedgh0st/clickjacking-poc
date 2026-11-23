import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clickjacking Frame Protection Demo",
  description:
    "A defensive, educational mock account page demonstrating browser frame protection.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
