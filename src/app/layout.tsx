import type { Metadata } from "next";
import { Russo_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const russo = Russo_One({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "RETRO BOOSTING",
  description:
    "Unlock your full potential in League of Legends with Retro Boosting! 🚀 Our top-tier services include Elo boosting, arena boosting, and expert coaching. Level up your gameplay, climb the ranks, and dominate the competition with the best LoL boosting and coaching services available. Join the ranks of satisfied gamers who've achieved their dream ranks with Retro Boosting. Get started today!",
  icons: ["/img/logo.png"],
  openGraph: {
    title: "RETRO BOOSTING",
    description:
      "Unlock your full potential in League of Legends with Retro Boosting! 🚀 Our top-tier services include Elo boosting, arena boosting, and expert coaching. Level up your gameplay, climb the ranks, and dominate the competition with the best LoL boosting and coaching services available. Join the ranks of satisfied gamers who've achieved their dream ranks with Retro Boosting. Get started today!",
    images: ["/img/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
      </head>
      <body className={`${russo.className} antialiased bg-muted`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
