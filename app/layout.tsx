import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steun de Jeugd",
  description:
    "Steun de Jeugd investeert in kansen, talent en ontwikkeling voor jongeren.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
