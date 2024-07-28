import Link from "next/link";
import "../styles/navBar/navBar.css"
import AppLogo from "../components/appLogo";

export default function Nav() {
  return (
    <nav>
      <ul>
        <div className="leftLogoNav">
          <li>
            <AppLogo/>
          </li>
        </div>
        <div className="leftNav">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/aboutUs">About Us</Link>
          </li>
        </div>
        <div className="rightNav">
          <li>
            <p className="profile_window">UserDetails</p>
          </li>
        </div>
      </ul>
    </nav>
  );
}
