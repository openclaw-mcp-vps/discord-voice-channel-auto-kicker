import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Voice Auto-Kicker — Keep Channels Active",
  description: "Automatically kick or move muted/deafened users from Discord voice channels. Built for server admins and community managers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="42f5c8d3-c653-4fcb-8da3-a2914c419dbc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
