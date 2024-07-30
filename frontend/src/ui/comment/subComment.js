import "./subComment.css"
import LikeIcon from "../../ui/like-icon.svg";
import CommentIcon from "../../ui/comment-icon.svg";
import Image from "next/image";

export default function SubComment({ comment }) {
  console.log(comment?.comment_msg)
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
          <div className="child_count"><Image src={CommentIcon} width={15} height={15}/> {comment?.child_comments_count} Comment</div>
          <div className="like_count"><Image src={LikeIcon} width={15} height={15}/> {comment?.like_count} Likes</div>
        </div>
      </div>
    </div>
  );
}