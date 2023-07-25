
import { Formik } from 'formik';
import React from 'react';
import ReactDom from "react-dom";
import { Document, Page, pdfjs   } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import App from './App';


const rootElement = document.getElementById("root");
ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);