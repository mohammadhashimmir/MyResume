import React from "react";
import  pdf from "./resume.pdf"
import "./Resume.css"

const Resume=()=>{
return (
    <div>
  <iframe title="PDF" src={pdf} width="100%" height="729vh" style={{border:"1px solid #323639"}}></iframe>
    </div>
)
};
export default Resume;
