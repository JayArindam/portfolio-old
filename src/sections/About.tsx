import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Evening! I'm Jay and you may know me as a geek who is always upto something. I take great interest in exploring and learning about 
            various technologies. Alongside my studies I have also worked with various startups.
          </p>
          <p className="about-grid-info-text">
            My passion for working with technologies led me to pursue my studies in Bachellors in Computer Science and Engineering. {" "}
            {/* <Link href="#" className="link" target="_blank">
              Link Name.
            </Link> */}
          </p>

          <p className="about-grid-info-text">
            Additionally, I also spend my time doing some competitve programming at {""}
            <Link href="https://codeforces.com" className="link" target="_blank">
              Codeforces.
            </Link>
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">C++</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Firebase</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Flutter</li>
            <li className="about-grid-info-list-item">Java</li>
            <li className="about-grid-info-list-item">CSS</li>
          </ul>
          <p className="about-grid-info-text">
            Also few other things I enjoy:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Cooking</li>
            <li className="about-grid-info-list-item">Sketching</li>
            <li className="about-grid-info-list-item">Chess</li>
            <li className="about-grid-info-list-item">Video Games</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/jay.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
