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
  const [commentHistory, setCommentHistory] = useState([{post_id: post_id, parent_id: parent_id}])
  console.log("post_id", post_id, "parent_id", parent_id, allComments)
  console.log("commentHistroy", commentHistory)

  const changeState = (idx) => {
    const last = commentHistory.slice(idx)[0]
    setParentId(last.parent_id);
    setAllComments(last.post_id);
    console.log("last:", last)
  }

  const handlePrevCommentState = () => {
    commentHistory.pop();
    changeState(-2);
    setCommentHistory([...commentHistory]);
  }

  const handleCommentSubmit = async () => {
    const currentDate = new Date();
    const dateOfPost = currentDate.toISOString();
    if(!parentId)
      await createNewComment({ postId, newComment, dateOfPost })
    else
      await createNewComment({ newComment, parentId, dateOfPost })
  }

  const syncComments = async () => {
    console.log(`post_id : ${postId} parent_id : ${parentId}`)
    if(!parentId) {
      const comments = await getAllPostComments({ post_id: postId })
      setAllComments(comments)
    }
    else {
      const comments = await getAllChildComments({ parent_id: parentId })
      setAllComments(comments)
    }
    return allComments
  }

  const handleSubCommentChange = (comment) => {
    const newParentId = comment?.id
    const prev_post_id = null
    console.log("before parent_id: ", parentId, prev_post_id, commentHistory)
    setCommentHistory(prevHistory => [
      ...prevHistory,
      { post_id: prev_post_id, parent_id: newParentId }
    ]);
    console.log("after new parent_id: ", newParentId, prev_post_id, commentHistory)
  };

  useEffect(() => {
    changeState(-1)
    syncComments()
  }, [commentHistory, postId, parentId])

  return (
    <div className="comment_main_container">
      {
        parentId && <div className="back_button_container" onClick={handlePrevCommentState}>
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />  
        </div>
      }
      <div className="comment_container">
        {
          allComments && allComments.length > 0 && allComments.map((comment) => (
            <SubComment comment={comment} onSubCommentChange={handleSubCommentChange}/>
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