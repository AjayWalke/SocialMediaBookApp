import "../../styles/post/createNewPost.css"

export default function PostDescription() {
  return (
    <div className="description_container">
      <span className="description_tag">
        Description
      </span>
      <textarea
        className="input_description"
        placeholder="Enter Description......"
      />
    </div>
  );
}