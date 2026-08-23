import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://shinkadev.org";
const siteName = "Shinka.DEV";
const title = "Shinka.DEV — Разработка сайтов и веб-приложений";
const description = "Разработка сайтов, веб-приложений, Telegram Mini Apps и ботов.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title,
    description,
    locale: "ru_RU",
    images: [
      {
        url: "/og-icon.png",
        width: 256,
        height: 256,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/og-icon.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
