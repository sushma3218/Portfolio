import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sushma Karthikeyan | AI/ML Engineer Portfolio",
  description:
    "Portfolio of Sushma Karthikeyan, an aspiring AI/ML Engineer specializing in Cloud Computing, Data Science, and Intelligent Systems. She builds AI solutions that solve real-world problems.",
  keywords: [
    "AI Engineer Portfolio",
    "Machine Learning Student",
    "Cloud Computing Student",
    "AI Projects Portfolio",
    "Software Developer Portfolio",
  ],
  metadataBase: new URL("https://sushma3218.github.io/Portfolio/"),
  authors: [{ name: "Sushma Karthikeyan" }],
  openGraph: {
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
