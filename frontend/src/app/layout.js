import { Inter } from "next/font/google";
import "../styles/globals.css"
import Nav from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Social Media Book App",
  description: "Authered By Ajay Walke",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        { children }
      </body>
    </html>
  );
}
