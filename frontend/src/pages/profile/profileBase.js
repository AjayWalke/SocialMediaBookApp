import Image from "next/image";
import ProfilePic from "@/ui/profile/profilePic";
import "../../styles/profile/profile.css"
import HeaderSubheader from "@/ui/headerSubheader/headerSubheader";

export default function ProfileBase() {
  const profile = {
    username: 'aj12',
    name: 'Ajay Walke',
    address: 'Flat no 2, radhakrushna kunj',
    email: 'temp1@email.com'
  }

  return (
    <div className="profile_container">
      <div className="image_container">
        <div className="profile_image">
          <ProfilePic name={profile.name}/>
        </div>
        <div className="profile_name">
          { profile.name }
        </div>
      </div>
      <div className="details_container">
        <HeaderSubheader header="address" subheader={profile?.address} />
        <HeaderSubheader header="username" subheader={profile?.username} />
        <HeaderSubheader header="email" subheader={profile?.email} />
      </div>
    </div>
  );
}
