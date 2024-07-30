import Image from "next/image";
import "../styles/post/post.css"
import getInitials from "@/components/getInitials";
import "../styles/post/comment.css"
import {
  getAllPostComments
} from "../api/comments/comment";
import { useEffect, useState } from "react";
import { increaseLikeCount } from "@/api/like/like";
import LikeIcon from "../ui/like-icon.svg";
import CommentIcon from "../ui/comment-icon.svg";
import Comments from "./comments";
import getUiCommentText from "@/components/commentText";

export default function Post({ post }) {
  const [commentCounts, setCommentCounts] = useState(0)
  const [like, setLike] = useState(post.like_count)
  const [parentId, setParentId] = useState(post.id)
  const [comments, setComments] = useState([])
  const [showComment, setShowComment] = useState(false)

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const showCommentsCount = async (post_id) => {
    const data = await getAllPostComments({ post_id })
    setComments(data)
    setParentId(post_id)
    return data?.length
  }

  const handleLikeCount = async () => {
    const likeId = post.like_id
    const likeCount = await increaseLikeCount({ likeId })
    setLike(likeCount)
  }

  const handleShowComment = () => {
    if(showComment) {
      setShowComment(false)
    }
    else {
      setShowComment(true)
    }
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
          src={post?.image_link}
          height={300}
          width={500}
          alt='Loading....'
        />   
      }
      <div className="postFooter">
        <span><b>Posted at:</b> {formatDate(post?.date_of_post)}</span>
        <div className="post_span_comment_container" onClick={handleShowComment}><Image src={CommentIcon} width={15} height={15}/> {getUiCommentText(comments?.length, showComment)} </div>
        <span onClick={handleLikeCount}><Image src={LikeIcon} width={15} height={15}/> {like} Likes</span>
      </div>
      {
        showComment && <Comments post_id={parentId} parent_id={null} comments={comments}/>
      }
    </div>
  );
}
