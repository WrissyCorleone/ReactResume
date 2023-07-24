import "./styles.css";
import React from "react";

import SinglePagePDFViewr from "./components/pdf/single-page";

import samplePDF from "./sample.pdf";

export default function App() {
  return(
    <div style={{margin: "auto 20rem"}}>
      <h4 style={{textAlign: "center"}}>Resume</h4>
      <SinglePagePDFViewr pdf={samplePDF} />
    </div>
  );
}