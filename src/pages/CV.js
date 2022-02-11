import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Box } from "@material-ui/core";
import imoCV from "../Docs/Imogen_Drews_CV_January.pdf";
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
    position: {
        display: "flex",
        justifyContent: "center",
        margin: "30px"
        
    },
}));

const App = () => {

  const classes = useStyles();

  // PDFjs worker from an external cdn
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };
  return (
    <Box className={classes.position}>
      <div>
        <Document file={imoCV} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </Box>
  );
};

export default App;
