import Image from "next/image";
import HomeBase from "../../pages/home/homeBase"
import "../../styles/homeContainer/homeContainer.css"

export default function HomePage() {
  return (
    <div className="home_container">
      <HomeBase/>
    </div>
  );
}