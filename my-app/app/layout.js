import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AIspire",
  description: "(AI + Aspire) — Inspiring through AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */} 
            <Header/>
            <main className="min-h-screen">{children}</main> 
            {/*footer*/}
            <footer classname="bg-muted/50 py-12">
            <div className="container mx-auto p-4 text-center text-gray-200">
              <div>
                <p>Made with ❤️ by Ragini</p>
              </div>
              </div>
            </footer>
          </ThemeProvider>
      </body>
    </html>
  );
}
