import Nav from "@/components/nav";
import { Inter } from "next/font/google";
import "../../styles/homeContainer/homeContainer.css"
import "../../styles/appContainer/appContainer.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Authered By Ajay Walke",
};

export default function HomeLayout({ children }) {
  return (
    <div className="main_container">
      <div className="navbar_container">
        <Nav/>
      </div>
      <div className="children_container">
        {children}
      </div>
    </div>
  );
}