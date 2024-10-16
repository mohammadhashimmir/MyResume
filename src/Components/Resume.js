import React from "react";
import "./Resume.css";
import pdf from "../Components/Resume 2024.pdf"

const Resume = () => {
  return (
    <div className="resume-container">
      <iframe
        title="PDF"
        src={pdf}
        className="resume-iframe"
      ></iframe>
    </div>
  );
};

export default Resume;
