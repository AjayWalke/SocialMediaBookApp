import Link from "next/link";
import Logo from "../ui/app_logo.svg"
import Image from 'next/image';

export default function AppLogo() {
  return (
    <div>
      <Image
        src={Logo}
        width={800}
        height={600}
      />
      <div style={{marginLeft: '300px'}}><i><b>Now Time For New Media Platform</b></i></div>
    </div>
  );
}