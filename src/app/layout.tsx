import type { Metadata } from "next";
import { Fraunces, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["600", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "600"],
});

const isSpikeHost =
  process.env.NEXT_PUBLIC_SITE_ENV === "spike" ||
  process.env.CF_PAGES_BRANCH === "preview" ||
  process.env.LYRA_SPIKE === "1" ||
  // Default: spike preview stays noindex until production cutover
  process.env.NEXT_PUBLIC_ALLOW_INDEX !== "true";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://lyra-spike.quikle.co.za",
  ),
  title: {
    default: "Lyra Group | Debt Collection South Africa — No Collection. No Fee.",
    template: "%s | Lyra Group",
  },
  description:
    "Professional B2B debt recovery for South African SMEs. Compliant, personal, commission-based. No Collection. No Fee.",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "Lyra Group",
    title: "Lyra Group — Precision Recovery. Purposeful Results.",
    description:
      "Recover unpaid invoices with a compliance-first, female-owned debt collection agency in Johannesburg.",
  },
  robots: isSpikeHost
    ? { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } }
    : { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-ZA"
      className={`${fraunces.variable} ${sourceSans.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen bg-lyra-bg font-sans text-lyra-text antialiased">
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
