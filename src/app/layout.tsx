import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased flex flex-col min-h-screen">
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex flex-grow">
            <Sidebar />
            <main className="flex-grow container mx-auto p-4">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
