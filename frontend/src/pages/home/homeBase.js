import Post from "@/models/post";
import "../../styles/homeContainer/homeContainer.css"

export default function HomeBase() {
  const examplePost = [
    {
      userName: "Ajay Walke",
      message: "This is an example post message.",
      postImage: "https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg",
      comments: ["Nice post!", "Great job!"],
      likes: 20,
    },
    {
      userName: "Ajay Walke",
      message: "This is an example post message.",
      postImage: "https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg",
      comments: ["Nice post!", "Great job!"],
      likes: 20,
    }
  ]

  return (
    <div className="homeBaseContainer">
      {
        examplePost.map((post, index) => (
          <Post {...post}/>
        ))
      }
    </div>
  );
}