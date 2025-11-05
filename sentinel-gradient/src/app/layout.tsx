import type { Metadata } from "next";
import Script from "next/script";
import {
  Montserrat,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sentinelgradient.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Sentinel Gradient — AI Assurance and Interpretability Research",
    template: "%s | Sentinel Gradient",
  },
  description:
    "Sentinel Gradient LLC delivers interpretable ML, LLM evaluation, and autonomy assurance for defense and public sector programs.",
  openGraph: {
    type: "website",
    siteName: "Sentinel Gradient",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SentinelGradient",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfair.variable} antialiased bg-sg-night text-off-white`}
      >
        <a
          href="#main-content"
          className="skip-to-content"
        >
          Skip to main content
        </a>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXX', { page_path: window.location.pathname });
            `,
          }}
        />
      </body>
    </html>
  );
}
