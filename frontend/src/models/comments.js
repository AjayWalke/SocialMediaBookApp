import { Comme } from "next/font/google";
import { useEffect, useState } from "react";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createNewComment, getAllChildComments, getAllPostComments } from "../api/comments/comment"
import SubComment from "@/ui/comment/subComment";
import SendIcon from "../ui/send-icon.svg"
import Image from "next/image";

export default function Comments({ post_id, parent_id, comments }) {
  const [postId, setPostId] = useState(post_id)
  const [parentId, setParentId] = useState(parent_id)
  const [allComments, setAllComments] = useState(comments)
  const [newComment, setNewComment] = useState('')
  const [flag, setFlag] = useState(false)

  const handlePrevCommentState = () => {
    setParentId(parent_id)
    setAllComments(null)
  }

  const handleCommentSubmit = async () => {
    const currentDate = new Date();
    const dateOfPost = currentDate.toISOString();
    createNewComment({ postId, newComment, parentId, dateOfPost })
    setFlag(!flag)
    setNewComment('')
  }

  const syncComments = () => {
    if(!parentId) {
      const comments = getAllPostComments({ post_id })
      setAllComments(comments)
    }
    else {
      const comments = getAllChildComments({ parent_id })
      setAllComments(comments)
    }
  }

  useEffect(() => {
    syncComments
  }, [flag])

  return (
    <div className="comment_main_container">
      <div className="back_button_container" onClick={handlePrevCommentState}>
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />  
      </div>
      <div className="comment_container">
        {
          allComments.length > 0 && allComments.map((comment) => (
            <SubComment comment={comment}/>
          ))
        }
      </div>
      <div className="input_comment">
        <input
          className="comment-input"
          placeholder="comment......."
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleCommentSubmit}>
          <Image
            src={SendIcon}
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
}