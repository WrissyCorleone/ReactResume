import React, {useState} from "react";
import { Document, Page } from "react-pdf";

// 
export default function SinglePage(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); //setting 1 to show first page

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }


    function nextPage() {
        changePage(1);
    }

    const { pdf } = props;

    return (
        <>
            <Document
                file={pdf}
                options={{ workerSrc: "/pdf.worker.js"}}
                onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <div>
                    <p>
                        Page {pageNumber || (numPages ? 1 : "--")} of {numPages - 1 || "--"}
                    </p>
                    <hr />
                    <button type="button"
                    disabled={pageNumber <=1}  
                    onClick={previousPage}>
                        Previous
                    </button>
                    <button type="button" 
                    disabled={pageNumber >= numPages -1} 
                    onClick={nextPage}>
                        Next 
                    </button>
                </div>
        </>
    );
}
