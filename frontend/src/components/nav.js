import Link from "next/link";
import "../styles/navBar/navBar.css"
import Image from 'next/image';
import Logo from "../ui/app_logo.svg"
import Logout from "../ui/logout-icon.svg"
import React from "react";
// import HandleLogOut from "./handleLogout";
import { useDispatch } from "react-redux";
import { clearUserDetails } from "../stores/main_home/login"

export default function Nav({ userData }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUserDetails());
    window.location.reload()
  }

  return (
    <nav>
      <ul>
        <div className="leftLogoNav">
          <li>
            <Image 
              src={Logo}
              width={60}
              height={60}
            />
          </li>
          <span><b>Social Media Book App</b></span>
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
          <div className="sub_rightNav">
            <span>Hi, {userData?.name}! </span>
            <div className="image" onClick={handleLogout}><Image src={Logout} width={40} height={40}/></div>
          </div>
        </div>
      </ul>
    </nav>
  );
}
