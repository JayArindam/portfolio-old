import React from "react";
import { motion } from "framer-motion";

function Certificates() {
  const certificate_data = [
    {
      certificateName: "Code Foundations Skill Path",
      issuingOrganisation: "Codecademy",
      yearIssued: "2024", 
      certificateLink:"https://www.codecademy.com/profiles/text7592143704/certificates/5b55e668646caa552f8e4d1d"
    },
    {
      certificateName: "Leading People and Teams Specialization",
      issuingOrganisation: "Coursera",
      yearIssued: "2023", 
      certificateLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/9KESM4RSXQK5"
    },
    {
      certificateName: "Python (Basic)",
      issuingOrganisation: "HackerRank",
      yearIssued: "2023", 
      certificateLink:"https://www.hackerrank.com/certificates/64016d32f6e2"
    },
    {
      certificateName: "Introduction to Programming Using Python",
      issuingOrganisation: "Coding Ninjas",
      yearIssued: "2023", 
      certificateLink:"https://certificate.codingninjas.com/verify/ce2f69701a4e5ec5"
    },
    {
      certificateName: "Google Play Academy - Store Listing Certificate",
      issuingOrganisation: "Google",
      yearIssued: "2023", 
      certificateLink:"https://www.credential.net/e1ea9ecf-7213-4327-b62a-e1c4ac62f600"
    },
    {
      certificateName: "Problem Solving (Basic)",
      issuingOrganisation: "HackerRank",
      yearIssued: "2023", 
      certificateLink:"https://www.hackerrank.com/certificates/b4f4509852f3"
    },

  ];
  return (
      <div className="projects-container">
        <h1 className="Cert_heading">These are all my certifications 😎</h1>
        {certificate_data.map(
          ({
            certificateName,
            issuingOrganisation,
            certificateLink,
            yearIssued
          }) => {
            return (
              <motion.div
                className="cert"
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
                <div className="Certification_bar">
                  <p className="Certificate_name">Certificate Name: {certificateName}</p>
                  <p className="Issued_by">Issuing Organisation: {issuingOrganisation}</p>
                  <p className="Issues_on">Issued Year: {yearIssued} </p>
                  <p className="Certificate_link">
                    Certificate Link : <a href={certificateLink} target="_blank" rel="noopener noreferrer">Follow this link to view certificate</a>
                  </p>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
  );
}

export default Certificates;