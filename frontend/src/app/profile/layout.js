import { Inter } from "next/font/google";
import Nav from "@/components/nav";
import "../../styles/homeContainer/homeContainer.css"
import "../../styles/appContainer/appContainer.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Profile",
  description: "Authered By Ajay Walke",
};

export default function AboutUsLayout({ children }) {
  return (
    <div>
      <div className="navbar_container">
        <Nav/>
      </div>
      <div className="children_container">
        {children}
      </div>
    </div>
  );
}