import Upload from "@/models/upload";
import PostDescription from "./postDescription";
import "../../styles/post/createNewPost.css"

export default function CreateNewPost() {
  return (
    <div className="create_new_post_container">
      <PostDescription/>
      <Upload/>
      <div className="post_submit"><button>Post</button></div>
    </div>
  );
}
