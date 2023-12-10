import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const myFont = localFont({ src: "/fonts/Lilliput Steps.otf" });

export const metadata: Metadata = {
  title: "RETRO BOOSTING",
  description:
    "Unlock your full potential in League of Legends with Retro Boosting! 🚀 Our top-tier services include Elo boosting, arena boosting, and expert coaching. Level up your gameplay, climb the ranks, and dominate the competition with the best LoL boosting and coaching services available. Join the ranks of satisfied gamers who've achieved their dream ranks with Retro Boosting. Get started today!",
  icons: ["/img/logo.png"],
  openGraph: {
    title: "RETRO BOOSTING",
    description:
      "Unlock your full potential in League of Legends with Retro Boosting! 🚀 Our top-tier services include Elo boosting, arena boosting, and expert coaching. Level up your gameplay, climb the ranks, and dominate the competition with the best LoL boosting and coaching services available. Join the ranks of satisfied gamers who've achieved their dream ranks with Retro Boosting. Get started today!",
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
        <meta
          property="og:image"
          content="https://retro-boosting.vercel.app/img/logo.png"
        />
      </head>
      <body className={`${myFont.className} antialiased bg-muted uppercase`}>
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
