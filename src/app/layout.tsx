import React from "react";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Microsoft LSA Nexus Chapter",
  description: "A chapter website for Microsoft Learn Student Ambassadors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-black text-white">
        {/* Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D1HYC0GL28"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D1HYC0GL28');
          `}
        </Script>

        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
