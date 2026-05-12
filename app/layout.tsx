import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Privacy Breach Alerter — Get notified when your data appears in breaches",
  description: "Monitors data broker sites, breach databases, and public leaks for your personal information. Real-time alerts for developers, professionals, and privacy-conscious individuals."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="817eb10a-27bc-42e4-b757-c7003484b59f"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
