import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Become a Partner | autari",
  description:
    "You bring the expertise. We build the automation. You keep the majority — forever. Partner with autari.",
  openGraph: {
    title: "Become a Partner | autari",
    description:
      "You bring the expertise. We build the automation. You keep the majority — forever.",
    url: "https://partners.autari.co.uk",
    siteName: "autari Partners",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Partner | autari",
    description:
      "You bring the expertise. We build the automation. You keep the majority — forever.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans text-bark bg-cream antialiased">
        {children}
      </body>
    </html>
  );
}
