import React from "react";
import pdf from "./resume.pdf";
import "./Resume.css";

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
