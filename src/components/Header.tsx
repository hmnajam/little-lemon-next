import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <Navbar />
      <section>
        <h1>
          The mediteranean Restaurant of your choice.
          <img
            src="/assets/nav-logo.png"
            alt="header Image"
            width={500}
            height={600}
          />
        </h1>
      </section>
    </header>
  );
}
