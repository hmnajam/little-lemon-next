import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <Navbar />

      <Image
        src="/assets/big-image2.jpg"
        alt="Header Image"
        layout="responsive"
        width={100}
        height={100}
      />
    </header>
  );
}
