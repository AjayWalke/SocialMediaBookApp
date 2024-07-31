'use client';
import AboutUsBase from "@/common_pages/aboutUs/aboutUsBase";
import Nav from "@/components/nav";
import { useSelector } from "react-redux";

export default function AboutUsPage() {
  const userData = useSelector((state) => state.user.user)

  return (
    <div>
      <Nav userData={userData}/>
      <AboutUsBase/>
    </div>
  );
}
