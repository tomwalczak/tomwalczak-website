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
    default: "Tom Walczak | AI Engineer",
    template: "%s | Tom Walczak",
  },
  description: "AI engineer building advanced AI systems for clients across VC, media, education, finance, and energy. I run external audits of AI and machine-learning systems, and I'm Head of AI to Alex Epstein.",
  keywords: ["AI", "artificial intelligence", "production AI systems", "AI agents", "AI engineering", "AI evaluation", "AI audits", "machine learning", "Tom Walczak"],
  authors: [{ name: "Tom Walczak", url: "https://tomwalczak.com" }],
  creator: "Tom Walczak",
  openGraph: {
    title: "Tom Walczak",
    description: "I build advanced AI systems that work in production.",
    url: "https://tomwalczak.com",
    siteName: "Tom Walczak",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tom Walczak",
    description: "I build advanced AI systems that work in production.",
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
