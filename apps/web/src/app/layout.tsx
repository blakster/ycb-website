import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import localFont from "next/font/local";
import "../index.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/components/providers";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  weight: ["400"],
});

const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Young Changemakers Bootcamp",
    template: "%s | Young Changemakers Bootcamp",
  },
  description:
    "The Young Changemakers Bootcamp (YCB) is an intensive one-week residential program for high school students (grade 9 to 12 or equivalent)",
  keywords: [
    "Young Changemakers Bootcamp",
    "ycb",
    "YCB",
    "youth leadership",
    "changemakers",
    "student bootcamp",
    "leadership program",
    "social impact",
    "youth empowerment",
  ],
  authors: [{ name: "Tale of Humankind" }],
  creator: "Tale of Humankind",
  publisher: "Tale of Humankind",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ycbootcamp.taleofhumankind.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Young Changemakers Bootcamp",
    description:
      "Empowering the next generation of leaders and changemakers through transformative experiences and collaborative learning.",
    url: "https://ycbootcamp.taleofhumankind.com",
    siteName: "Young Changemakers Bootcamp",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Young Changemakers Bootcamp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Young Changemakers Bootcamp",
    description:
      "Empowering the next generation of leaders and changemakers through transformative experiences and collaborative learning.",
    images: ["/icon.png"],
  },

  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head>
        <script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        />
      </head> */}
      <body
        className={`${newsreader.variable} ${satoshi.variable} font-sans antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
