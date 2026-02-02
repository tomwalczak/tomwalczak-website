import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tomwalczak.com"),
  title: {
    default: "Tom Walczak | Building verifiable, truth-seeking AI agents",
    template: "%s | Tom Walczak",
  },
  description: "AI Engineer based in London. Building AI agents that verify their own outputs on complex, controversial topics.",
  keywords: ["AI", "artificial intelligence", "truth-seeking AI", "AI agents", "debate AI", "fact-checking", "Tom Walczak"],
  authors: [{ name: "Tom Walczak", url: "https://tomwalczak.com" }],
  creator: "Tom Walczak",
  openGraph: {
    title: "Tom Walczak",
    description: "Building verifiable, truth-seeking AI agents",
    url: "https://tomwalczak.com",
    siteName: "Tom Walczak",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tom Walczak",
    description: "Building verifiable, truth-seeking AI agents",
    creator: "@tom_walchak",
    site: "@tom_walchak",
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1 pt-14">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
