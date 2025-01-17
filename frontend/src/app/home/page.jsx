'use client';
import Image from "next/image";
import HomeBase from "../../common_pages/home/homeBase"
import "../../styles/homeContainer/homeContainer.css"
import { useSelector } from "react-redux";
import Nav from "@/components/nav";
import PostButton from "@/ui/postButton/postButton";

export default function HomePage() {
  const userData = useSelector((state) => state.user.user)

  return (
    <div className="home_container">
      <Nav userData={userData}/>
      <HomeBase/>
      <PostButton/>
    </div>
  );
}
