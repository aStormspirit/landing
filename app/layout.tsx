import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://shinkadev.org";
const siteName = "Shinka.DEV";
const description = "Senior IT Specialist & Full-Stack Engineer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteName,
    description,
    images: [
      {
        url: "/avatar.jpg",
        width: 1092,
        height: 1280,
        alt: "Shinkarenko Vladimir - Senior IT Specialist & Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    images: ["/avatar.jpg"],
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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
