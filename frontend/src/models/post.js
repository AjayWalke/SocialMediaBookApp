import Image from "next/image";
import "../styles/post/post.css"
import getInitials from "@/components/getInitials";
import {
  getAllChildComments
} from "../api/comments/comment";
import { useEffect, useState } from "react";

export default function Post({ post }) {
  const [commentCounts, setCommentCounts] = useState(0)

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const showCommentsCount = async (parent_id) => {
    const data = await getAllChildComments({ parent_id })
    return data.length
  }

  useEffect(() => {
    const totalComments = showCommentsCount(post?.id)
    setCommentCounts(totalComments)
  }, [post.id])

  return (
    <div className="postContainer">

      <div className="userProfileContainer">
        
        <div className="avatar_container">
          <span className="avatar_letter">
            {getInitials(post?.username)}
          </span>
        </div>
        
        <span className="userName">
          {post?.username}
        </span>
      </div>
      
      <div className="postMessage">
        {post?.post_msg}
      </div>
      {
        post?.image_link && 
        <Image 
          src="https://drive.google.com/thumbnail?id=1cSNPOFSbiNBcmRrKvJg9c1X8sV73Mf8q"
          height={300}
          width={500}
          alt='Loading....'
        />   
      }
      <div className="postFooter">
        <span><b>Posted at:</b> {formatDate(post?.date_of_post)}</span>
        <span style={{color:"blue"}}>Show {commentCounts} Comments</span>
        <span>{post?.like_count} Likes</span>
      </div>
    
    </div>
  );
}
