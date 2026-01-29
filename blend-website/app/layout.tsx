import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blend Global",
  description:
    "Blend empowers connections globally through events, digital marketing, and immersive experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-background`}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
