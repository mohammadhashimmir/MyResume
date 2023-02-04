import React from "react";
import ReactDOM  from "react-dom/client";
import Resume from "./Components/Resume"

const first=document.querySelector("#root");

const second=ReactDOM.createRoot(first);

second.render(<Resume/>)