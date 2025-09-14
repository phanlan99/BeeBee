import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: "Bán hàng online",
  description: "Bán hàng online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute='class'
        defaultTheme='light'
        enableSystem
        disableTransitionOnChange
      >
        <body className={inter.className}>
          <main className="container">{children}</main>
        </body>
      </ThemeProvider>
    </html>
  );
}
