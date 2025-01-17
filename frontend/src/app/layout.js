import { Inter } from "next/font/google";
import "../styles/app.css"
import ProviderWrapper from "@/components/providerWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Social Media Book App",
  description: "Authered By Ajay Walke",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProviderWrapper>
          { children }
        </ProviderWrapper>
      </body>
    </html>
  );
}
