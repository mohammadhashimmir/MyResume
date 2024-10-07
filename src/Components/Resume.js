import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <iframe
        title="PDF"
        src="https://firebasestorage.googleapis.com/v0/b/resume-app-16c2e.appspot.com/o/resume%202024.pdf?alt=media&token=b45a47a9-7eac-4df8-87d7-b2eaefc12b6d"
        className="resume-iframe"
      ></iframe>
    </div>
  );
};

export default Resume;
