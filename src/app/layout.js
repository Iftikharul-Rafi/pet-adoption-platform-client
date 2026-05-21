import { Geist, Geist_Mono }
from "next/font/google";

import { Toaster }
from "react-hot-toast";

import Navbar
from "@/components/shared/Navbar";

import Footer from "@/components/shared/Footer";

import AuthProvider
from "@/providers/AuthProvider";

import ThemeProvider
from "@/components/providers/ThemeProvider";

import "./globals.css";




// ===============================
// FONTS
// ===============================
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});








// ===============================
// METADATA
// ===============================
export const metadata = {

  title: "Pet Adoption Platform",

  description:
    "Find and adopt your perfect pet companion",

};








// ===============================
// ROOT LAYOUT
// ===============================
export default function RootLayout({
  children,
}) {

  return (

    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >

      <body className="min-h-screen antialiased transition-colors duration-300">



        {/* ===============================
            THEME PROVIDER
        =============================== */}
        <ThemeProvider>



          {/* ===============================
              MAIN WRAPPER
          =============================== */}
          <div className="min-h-screen bg-white text-black dark:bg-[#0f172a] dark:text-white transition-colors duration-300">



            {/* ===============================
                TOAST
            =============================== */}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 3000,

                style: {
                  borderRadius: "12px",
                  background: "#1e293b",
                  color: "#fff",
                },
              }}
            />







            {/* ===============================
                AUTH PROVIDER
            =============================== */}
            <AuthProvider>

              {/* NAVBAR */}
              <Navbar />



              {/* PAGE CONTENT */}
              <main>
                {children}
              </main>

              <Footer />

            </AuthProvider>

          </div>

        </ThemeProvider>

      </body>

    </html>

  );

}

