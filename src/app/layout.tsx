import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Line Persona - Transform Photos into Minimalist Profile Avatars | Professional LinkedIn, Twitter, GitHub",
    template: "Line Persona | Ink - Minimalist Profile Avatars"
  },
  description: "Transform your photos into stunning minimalist profile avatars in 30 minutes. Perfect for LinkedIn, Twitter/X, GitHub, and professional platforms. Stand out with hand-drawn, unique avatars.",
  keywords: [
    "profile avatar",
    "minimalist avatar",
    "LinkedIn avatar",
    "Twitter avatar",
    "GitHub avatar",
    "professional photo",
    "avatar design",
    "profile picture",
    "social media avatar",
    "hand-drawn avatar",
    "photo transformation",
    "professional branding",
    "personal branding",
    "avatar generator",
    "profile picture maker"
  ],
  authors: [{ name: "Ink Team" }],
  creator: "Ink",
  publisher: "Ink",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ink-avatars.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://line-persona.inkmemory.site', // Replace with your actual domain
    siteName: 'Line Persona - Minimalist Profile Avatars',
    title: 'Transform Photos into Minimalist Profile Avatars | Ink',
    description: 'Transform your photos into stunning minimalist profile avatars in 30 minutes. Perfect for LinkedIn, Twitter/X, GitHub, and professional platforms.',
    images: [
      {
        url: '/og-image.jpg', // You'll need to create this image
        width: 1200,
        height: 630,
        alt: 'Line Persona - Transform your photos into minimalist profile avatars',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@clo_jeann', // Replace with your actual Twitter handle
    creator: '@clo_jeann', // Replace with your actual Twitter handle
    title: 'Transform Photos into Minimalist Profile Avatars | Line Persona',
    description: 'Transform your photos into stunning minimalist profile avatars in 30 minutes. Perfect for LinkedIn, Twitter/X, GitHub, and professional platforms.',
    images: ['/twitter-image.jpg'], // You'll need to create this image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: 'your-google-verification-code', // Replace with your actual verification code
  //   // yandex: 'your-yandex-verification-code',
  //   // yahoo: 'your-yahoo-verification-code',
  // },
  category: 'technology',
  classification: 'Business',
  other: {
    'application-name': 'Line Persona',
    'apple-mobile-web-app-title': 'Line Persona',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#000000',
    // 'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
