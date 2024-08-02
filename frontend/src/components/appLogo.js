import Link from "next/link";
import Logo from "../ui/app_logo.svg"
import Image from 'next/image';
import "../styles/navBar/navBar.css"

export default function AppLogo() {
  return (
    <div className="app_logo_img_container">
      <Image
        src={Logo}
        width={800}
        height={600}
      />
      <div className="app_logo_container"><i><b>Now Time For New Media Platform</b></i></div>
    </div>
  );
}