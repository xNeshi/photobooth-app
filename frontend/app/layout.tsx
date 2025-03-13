import type { Metadata } from "next";
import "./globals.css";
import { quickSand } from "@/public/fonts/fonts";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Photobooth",
  description: "Welcome to Photobooth!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${quickSand.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
