import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AriMayi",
  description: "Expertise, Innovation et Excellence au service de votre développement",
};



import "./globals.css"



import FontAwesomeProvider from "@/providers/FontAwesomeProvider";
import AuthProvider from '@/providers/AuthProvider';
import PageLoader from "@/app/PageLoader";

import SnackbarProvider from '@/providers/SnackbarProvider'; 

export default function RootLayout({ children }) {
  
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

          <AuthProvider>
             <SnackbarProvider >
            <FontAwesomeProvider>
              <PageLoader>
                {children}
              </PageLoader>
            </FontAwesomeProvider>
            </SnackbarProvider>
          </AuthProvider>
      
      </body>
    </html>
  );
}
