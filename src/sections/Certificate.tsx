import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Certificates() {
  const projectsData = [
    {
      image: "/project1.png",
      certificateName: "something",
      certificateLink: "#",
      certificateDescription:
        "This project aims at promoting travel. What I essentially made was a website that promotes travel and has a authentication system. The authentication system was made with firebase and also has a password recovery system. This project was mainly made to showcase my firebase and coding skills 😅",
      issuingOrganisation: [
        "HTML",
        "CSS",
        "Javascript",
      ],
      projectExternalLinks: {
        github: "#",
        externalLink: "https://voyageurban.netlify.app/",
      },
    },
    {
      image: "/project2.png",
      certificateName: "something",
      certificateLink: "https://jayarindam.github.io/FEE-Juspay-clone/",
      certificateDescription:
        "This is a chat app made with React and Node.js that sends real-time messages and is highly scalable. It uses advanced JavaScript concepts like debouncing and is optimized for React. It has 300+ stars on GitHub and over 180k views on YouTube.",
      issuingOrganisation: [
        "HTML",
        "CSS",
      ],
      projectExternalLinks: {
        github: "https://github.com/JayArindam/FEE-Juspay-clone",
        externalLink: "https://jayarindam.github.io/FEE-Juspay-clone/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some of my certifications 😅</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            certificateDescription,
            certificateLink,
            projectExternalLinks,
            certificateName,
            issuingOrganisation,
          }) => {
            return (
              <motion.div
                className="project"
                key={certificateName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} 
                    fill 
                    alt={certificateName} 
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{certificateName}</h3>
                  <div className="project-info-description">
                    <p>{certificateDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {issuingOrganisation.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Certificates;