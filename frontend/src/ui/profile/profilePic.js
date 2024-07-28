import "./profilePic.css"
import getInitials from "@/components/getInitials";

export default function ProfilePic( { name } ) {
  return (
    <div className="avatar_container1">
      <span className="avatar_letter1">
        {getInitials(name)}
      </span>
    </div>
  )
};