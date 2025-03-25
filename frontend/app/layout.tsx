import type { Metadata } from "next";
import "./globals.css";
import { quickSand } from "@/public/fonts/fonts";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Photobooth",
  description: "Welcome to Photobooth!",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          type="image/png"
          href="favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="favicon/favicon.svg"
        />
        <link
          rel="shortcut icon"
          href="favicon/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="InstaCuts"
        />
        <link
          rel="manifest"
          href="favicon/site.webmanifest"
        />
      </head>
      <body className={`${quickSand.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster
          expand={true}
          position="bottom-right"
          richColors
        />
      </body>
    </html>
  );
}
