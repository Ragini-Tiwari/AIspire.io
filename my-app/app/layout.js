import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";   // ✅ Match file name casing
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AIspire",
  description: "(AI + Aspire) — Inspiring through AI",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* Header */}
            <Header />

            <main className="min-h-screen">{children}</main>

            {/* Footer */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto p-4 text-center text-gray-200">
                <p>Made with ❤️ by Ragini</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
