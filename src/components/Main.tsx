import Image from "next/image";

export default function Main() {
    return (
        <main>

          <Image
        src="/assets/big-image2.jpg"
        alt="Header Image"
        layout="responsive"
        width={100}
        height={100}
      />
        <h1>This Week's Specials</h1>
        Card Components
      </main>
    );
  }