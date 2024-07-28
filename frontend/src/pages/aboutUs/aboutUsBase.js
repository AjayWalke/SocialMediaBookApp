import Link from "next/link";
import "../../styles/aboutUs/aboutUs.css"

export default function AboutUsBase() {
  return (
    <div className="main_container1">
      <h1>------------------------------ Ajay Walke ------------------------------</h1>
      <p>GitHub : <Link href="https://github.com/AjayWalke"><span> Go to GitHub </span></Link> </p>
      <p>This is Created By Using NextJs As frontend And Ruby on Rails as Backend</p>
      <p>Copyright @Ajay Walke</p>
    </div>
  );
}