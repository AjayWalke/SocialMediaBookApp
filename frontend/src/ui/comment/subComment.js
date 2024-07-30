import "./subComment.css"
import LikeIcon from "../../ui/like-icon.svg";
import CommentIcon from "../../ui/comment-icon.svg";
import Image from "next/image";
import getUiCommentText from "@/components/commentText";
import { useState } from "react";
import { increaseLikeCount } from "@/api/like/like";

export default function SubComment({ comment, onSubCommentChange}) {
  const counts = comment.child_comments_count

  console.log("This is the comment : ", comment)

  const handleCommentChange = () => {
    onSubCommentChange(comment);
  }

  const handleLikeCountInc = async () => {
    const likeId = comment.like_id
    const likeCount = await increaseLikeCount({ likeId })
  }

  return (
    <div className="sub_comment_main_container">
      <div className="sub_comment_profile_container">
        T
      </div>
      <div className="sub_comment_container">
        <div className="sub_comment_msg_container">
          { comment?.comment_msg }
        </div>
        <div className="sub_comment_footer">
          <div className="child_count" onClick={handleCommentChange}>
            <Image src={CommentIcon} width={15} height={15}/> {getUiCommentText(counts)}
          </div>
          <div className="like_count" onClick={handleLikeCountInc}>
            <Image src={LikeIcon} width={15} height={15}/> {comment.like_count} Likes
          </div>
        </div>
      </div>
    </div>
  );
}