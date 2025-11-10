import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AtavicoLabs - Digital Product Development",
  description: "We build digital products end-to-end — from database to design. Specializing in Next.js, Node.js, PostgreSQL, and Flutter.",
  keywords: ["full stack development", "web app development", "mobile app development", "MVP development", "SaaS development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
