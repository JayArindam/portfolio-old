import Head from "next/head";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import Certificates from "@/sections/Certificate";
import { useState } from "react";
import Loader from "@/components/Loader";
import SocialIcons from "@/components/SocialIcons";
import Email from "@/components/Email";


function Certifications() {

  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <div className="app">
      <Head>
        <title>Jay Arindam Maity</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

        {showContent && (
          <>
            <Navbar />
            <main>
              <SocialIcons />
              <Certificates />
              <Email />
            </main>
            <Footer />
          </>
        )}

        <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  )
}

export default Certifications;
