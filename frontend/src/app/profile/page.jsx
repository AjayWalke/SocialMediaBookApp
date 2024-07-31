'use client';
import ProfileBase from "@/common_pages/profile/profileBase";
import Image from "next/image";
import "../../styles/profile/profile.css"
import Nav from "@/components/nav";
import { useSelector } from "react-redux";

export default function ProfilePage() {
  const userData = useSelector((state) => state.user.user)

  return (
    <div className="main_container3">
      <Nav userData={userData}/>
      <ProfileBase/>
    </div>
  );
}
