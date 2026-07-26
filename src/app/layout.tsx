import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lyra Group — Spike",
  description: "Cloudflare API route spike for lyragroup.co.za",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body className="antialiased">{children}</body>
    </html>
  );
}
