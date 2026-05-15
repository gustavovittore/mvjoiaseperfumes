import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MV Jóias & Perfumes | Boutique premium em Itapema",
  description:
    "Joias, perfumes, relógios e bolsas para mulheres que valorizam sofisticação, presença e autenticidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="h-full scroll-smooth antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
