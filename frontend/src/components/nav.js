import Link from "next/link";
import "../styles/navBar/navBar.css"
import AppLogo from "@/pages/appLogo";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <AppLogo/>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <p className="profile_window">UserDetails</p>
        </li>
      </ul>
    </nav>
  );
}
