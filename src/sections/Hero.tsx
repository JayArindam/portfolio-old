// import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// -------------------------------------------------------------------------------

interface TypingEffectProps {
  strings: string[];
  initial: { [key: string]: any };
  animate: { [key: string]: any };
  transition: { [key: string]: any };
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  strings,
  initial,
  animate,
  transition,
}) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedText((prevText) => {
        const currentString = strings[currentStringIndex];
        const nextChar = currentString[prevText.length];

        if (nextChar !== undefined) {
          return prevText + nextChar;
        } else {
          setCurrentStringIndex((prevIndex) =>
            (prevIndex + 1) % strings.length
          );
          return "";
        }
      });
    }, 250);

    return () => clearInterval(interval);
  }, [strings, currentStringIndex]);

  return (
    <motion.h2
      className="hero-title-large"
      style={{ height: "6rem", overflow: "hidden" }}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {typedText}
    </motion.h2>
  );
};

// -------------------------------------------------------------------------------

function Hero() {
  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Hi I am
      </motion.h1>

      {/* <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        Jay Arindam Maity.
      </motion.h2> */}

      <TypingEffect
        strings={[
          "Jay Arindam Maity...",
          "A passionate coder..."
        ]}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      />

      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
        I love coding.
      </motion.h3>

      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        I&apos;m a student and a computer science enthusiast who loves to spend his time learning about computer. Apart from the
        learning part I also take interest in organising various events and also helping out various communities. As of now I'm working with&nbsp;
        <Link href="https://github.com/Open-Source-Chandigarh" target="_blank" className="link">
          Open Source Chandigarh.
        </Link>
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
      </motion.div>
    </div>
  );
}

export default Hero;
