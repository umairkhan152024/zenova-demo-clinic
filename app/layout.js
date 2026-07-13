import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ZENOVA Clinic | Doctor Appointment Booking",
  description:
    "Book appointments with top doctors in Pakistan. ZENOVA Clinic offers easy online scheduling, patient management, and admin dashboard powered by ZENOVA Digital Solutions.",
  openGraph: {
    title: "ZENOVA Clinic | Doctor Appointment Booking",
    description:
      "Book appointments with top doctors. Powered by ZENOVA Digital Solutions.",
    url: "https://zenova-demo-clinic.vercel.app",
    images: [
      {
        url: "https://zenova-demo-clinic.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
