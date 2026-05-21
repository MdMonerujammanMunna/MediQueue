const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Comfortaa } from "next/font/google";
import "./globals.css";

import { ToastContainer } from "react-toastify";
import { Providers } from "@/Provider/ThemeToggle";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});


export const metadata = {
  title: "MediQueue",
  description: "MediQueue is a healthcare appointment scheduling application that allows patients to easily book appointments with their healthcare providers. With a user-friendly interface and seamless integration with healthcare systems, MediQueue streamlines the appointment booking process, reduces wait times, and improves patient satisfaction. Whether you're a patient looking to schedule an appointment or a healthcare provider managing your schedule, MediQueue is the solution for efficient and convenient healthcare scheduling.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${comfortaa.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground container mx-auto">
        <ToastContainer />
        <Providers>
          <main> {children} </main>
        </Providers>
      </body>
    </html>
  );
}
