import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bugwere Coffee Company – Coffee, Cocoa, Livestock",
  description:
    "Bugwere Coffee Company is an agribusiness initiative based in the Bugwere region of Eastern Uganda. We are dedicated to transforming rural livelihoods through sustainable agriculture.",
  keywords: [
    "Bugwere Coffee",
    "Uganda Coffee",
    "Sustainable Agriculture",
    "Cocoa Farming",
    "Rural Empowerment",
  ],
  authors: [{ name: "Bugwere Coffee Company" }],
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${raleway.variable} ${openSans.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
