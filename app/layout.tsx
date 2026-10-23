import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import AppNavbar from "@/components/AppNavbar";
import Footer from "@/components/Footer";

const display = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NusaKarya Studio",
    template: "%s | NusaKarya Studio",
  },
  description:
    "NusaKarya Studio - jasa pembuatan website company profile, toko online, dan desain UI/UX untuk UMKM dan startup.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" data-bs-theme="dark" className={`${display.variable} ${body.variable}`}>
      <body>
        <div className="app-shell">
          <AppNavbar />
          <main className="app-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
