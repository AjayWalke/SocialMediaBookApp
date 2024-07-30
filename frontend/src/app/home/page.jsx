'use client';
import Image from "next/image";
import HomeBase from "../../pages/home/homeBase"
import "../../styles/homeContainer/homeContainer.css"
import { useSelector } from "react-redux";
import Nav from "@/components/nav";

export default function HomePage() {
  const userData = useSelector((state) => state.user.user)

  return (
    <div className="home_container">
      <Nav userData={userData}/>
      <HomeBase/>
    </div>
  );
}
