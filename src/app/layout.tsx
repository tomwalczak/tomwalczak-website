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
  title: "Tom Walczak | Building verifiable, truth-seeking AI agents",
  description: "AI Engineer based in London. Building AI agents that verify their own outputs on complex, controversial topics.",
  openGraph: {
    title: "Tom Walczak",
    description: "Building verifiable, truth-seeking AI agents",
    url: "https://tomwalczak.com",
    siteName: "Tom Walczak",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tom Walczak",
    description: "Building verifiable, truth-seeking AI agents",
    creator: "@tom_walchak",
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
          defaultTheme="dark"
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
