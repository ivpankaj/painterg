/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

/* --- GLOBAL SEO (Root Metadata) --- */
export const metadata: Metadata = {
  title: {
    default: "PainterG | Professional Painting Services",
    template: "%s | PainterG",
  },
  description:
    "Official website of PainterG — Professional Residential and Commercial Painting Services. Elevating spaces with vibrant colors and expert craftsmanship.",
  keywords: [
    "PainterG",
    "Painter",
    "painting company",
    "best painters in Noida",
    "house painting",
    "commercial painting",
    "exterior painting",
    "interior painting",
    "custom murals",
    "wall texturing",
    "painting services",
  ],
  metadataBase: new URL("https://painterg.cookmytech.site"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "PainterG | Professional Painting Services",
    description:
      "Official website of PainterG — Professional Residential and Commercial Painting Services.",
    url: "https://painterg.cookmytech.site",
    siteName: "PainterG",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/ivpankaj.png",
        width: 1200,
        height: 630,
        alt: "PainterG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PainterG | Professional Painting Services",
    description:
      "Official website of PainterG — Professional Residential and Commercial Painting Services.",
    creator: "@painter_g",
    images: ["/ivpankaj.png"],
  },
  verification: {
    google: [
      "HkYS3evi3jqymwePJIQD6Ym4GZGNKhG28ZPB_K1ZfsY",
      "4G0C327upPlSMGFxrsmDaYGpYEF3UehJwpMzO8SYrVI",
      "cFZmG_ZDsn2CRz9dEiRh5_lKBRooRgVaQkyaiTsPj5U"
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Home & Garden",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "PainterG",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L1YYQDVVHB"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LD4GBDR35T"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-379FG77ENC"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4NW3LJ35LT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LD4GBDR35T');
            gtag('config', 'G-L1YYQDVVHB');
            gtag('config', 'G-379FG77ENC');
            gtag('config', 'G-4NW3LJ35LT');
          `}
        </Script>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "PainterG",
              alternateName: ["Painter G", "PainterG Services"],
              description:
                "Top rated painting services. Professional residential, commercial, exterior and interior painting.",
              url: "https://painterg.cookmytech.site",
              knowsAbout: [
                "House Painting",
                "Color Theory",
                "Texturing",
                "Murals",
                "Commercial Painting",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Noida",
                addressRegion: "Uttar Pradesh",
                addressCountry: "India"
              },
              image: "https://painterg.cookmytech.site/ivpankaj.png",
            }),
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
