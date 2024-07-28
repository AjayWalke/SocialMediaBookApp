import "../styles/post/post.css"
import getInitials from "@/components/getInitials";

export default function Post({ userName, message, postImage, comments, likes }) {
  return (
    <div className="postContainer">

      <div className="userProfileContainer">
        
        <div className="avatar_container">
            <span className="avatar_letter">
              {getInitials(userName)}
            </span>
        </div>
        
        <span className="userName">
          {userName}
        </span>
      </div>
      
      <div className="postMessage">
        {message}
      </div>
      
      { 
        postImage && <img 
          src={postImage} alt="Post image" className="postImage"
        />
      }
      
      <div className="postFooter">
        <span>{comments?.length} Comments</span>
        <span>{likes} Likes</span>
      </div>
    
    </div>
  );
}
