import { Inter } from "next/font/google";
import "../styles/globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import NextAuthSessionProvider from "@/providers/sessionProvider";
import '@/styles/globals.css';
import Navbar from "@/components/homepage/navbar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children } : { children: React.ReactNode })  {
  
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <div className="pt-[64px]">
            {children}
            <Toaster />
          </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}