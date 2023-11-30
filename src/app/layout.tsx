import type { Metadata } from "next";
import { Russo_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const russo = Russo_One({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "RETRO-BOOSTING",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia animi a illo ipsam, vero ipsum voluptates recusandae saepe repellat numquam.",
  icons: ["/img/logo.png"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${russo.className} antialiased bg-muted`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
