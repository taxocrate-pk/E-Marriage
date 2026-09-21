import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
  title:
    "E-Marriages - International Marriage & Cross-Border Marriage Services",
  description:
    "Premium international marriage services for couples across borders. Online Nikah, remote marriage, proxy marriage and marriage documentation services.",
  generator: "v0.app",
  keywords:
    "international marriage, cross-border marriage, online marriage, proxy marriage, nikah, marriage documentation",
  authors: [{ name: "E-Marriages" }],
  openGraph: {
    title: "E-Marriages - International Marriage Services",
    description:
      "Professional services for international and cross-border marriages",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport = {
  colorScheme: "light",
  themeColor: "#1a1a2e",
  initialScale: 1,
  userScalable: true,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
