import Head from "next/head";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import Certificates from "@/sections/Certificate";

function Certifications() {
  return (
    <div className="app">
      <Head>
        <title>Jay Arindam Maity</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
        <>
          <Navbar />
          <main>
            <Certificates />
          </main>
          <Footer />
        </>
    </div>
  )
}

export default Certifications;
