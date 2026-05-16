import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.painterg.com"),

  title: {
    default:
      "PainterG - Professional Painting Services in Delhi NCR",
    template: "%s | PainterG",
  },

  description:
    "PainterG provides professional interior painting, exterior painting, waterproofing, texture painting and commercial painting services across Delhi NCR, Gurugram, Noida, Faridabad and Ghaziabad.",

  keywords: [
    "PainterG",
    "painting services Delhi NCR",
    "house painters in Gurugram",
    "interior painting services",
    "exterior painting contractors",
    "wall painting services",
    "home painting Delhi",
    "commercial painting services",
    "texture painting Delhi NCR",
    "waterproofing services",
    "professional painters near me",
    "wall texture design",
    "painters in Noida",
    "painters in Faridabad",
    "painters in Ghaziabad",
    "luxury wall painting",
    "office painting services",
    "home renovation painters",
    "best painters in Delhi NCR",
  ],

  authors: [
    {
      name: "PainterG",
      url: "https://www.painterg.com",
    },
  ],

  creator: "PainterG",

  publisher: "PainterG",

  category: "Painting Services",

  applicationName: "PainterG",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.painterg.com",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.painterg.com",
    siteName: "PainterG",
    title:
      "PainterG - Premium Painting Services in Delhi NCR",
    description:
      "Professional interior painting, exterior painting, waterproofing and texture wall painting services across Delhi NCR.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1600&auto=format&fit=crop",
        width: 1600,
        height: 900,
        alt: "PainterG Painting Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "PainterG - Professional Painters in Delhi NCR",
    description:
      "Trusted interior & exterior painting services in Delhi NCR with premium finishes and modern designs.",
    images: [
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1600&auto=format&fit=crop",
    ],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  verification: {
    google: "google-site-verification-code",
  },

  other: {
    "theme-color": "#2FA084",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#EEEEEE] text-[#1E293B]">
        {children}

        {/* LOCAL BUSINESS SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "PainterG",
              image:
                "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1600&auto=format&fit=crop",
              url: "https://www.painterg.com",
              telephone: "+91 7048976431",
              email: "contact@roshanenterprises.org",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delhi NCR",
                addressRegion: "Delhi NCR",
                addressCountry: "IN",
              },
              areaServed: [
                "Delhi",
                "Gurugram",
                "Noida",
                "Faridabad",
                "Ghaziabad",
                "Delhi NCR",
              ],
              priceRange: "₹₹",
              description:
                "PainterG provides professional interior painting, exterior painting, waterproofing, texture painting and commercial painting services across Delhi NCR.",
              serviceType: [
                "Interior Painting",
                "Exterior Painting",
                "Texture Painting",
                "Commercial Painting",
                "Waterproofing",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}