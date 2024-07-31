import Image from "next/image";
import ProfilePic from "@/ui/profile/profilePic";
import "../../styles/profile/profile.css"
import HeaderSubheader from "@/ui/headerSubheader/headerSubheader";
import { useSelector } from "react-redux";

export default function ProfileBase() {
  const profile = useSelector((state) => state.user.user)

  return (
    <div className="profile_container">
      <div className="image_container">
        <div className="profile_image">
          <ProfilePic name={profile.name}/>
          <div className="profile_name"><span>{ profile.name }</span></div>
        </div>
      </div>
      <div className="details_container">
        <HeaderSubheader header="ABOUT" data={profile} />
      </div>
    </div>
  );
}
