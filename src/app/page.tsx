import Image from "next/image";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (


    
    <>
 <div>
      <Head>
        <title>Cool Title</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        />
      </Head>

    </div>
    {/* <Head>
    <meta name="description" content="your text goes here"/>
    <meta name="og:title" content=""/>
    <meta name="og:description" content=""/>
    <meta name="og:image" content=""/>

    </Head> */}
      <Header />
      <Main />
      <Footer />
    </>
  );
}
