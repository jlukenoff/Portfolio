// pages/resume.js
import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const ResumePage = () => {
  const pdfUrl =
    "https://storage.googleapis.com/john-lukenoff-portfolio.appspot.com/Resume.pdf";
  const docxUrl =
    "https://storage.googleapis.com/john-lukenoff-portfolio.appspot.com/Resume.docx";

  return (
    <Container>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          textAlign: "center",
          marginTop: "16px",
          marginBottom: "16px",
          color: "text.secondary",
        }}
      >
        My Resume
      </Typography>
      <Box sx={{ marginBottom: "16px" }}>
        <iframe
          src={pdfUrl}
          width="100%"
          height="600px"
          style={{ border: "none" }}
          title="Resume PDF"
        ></iframe>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}
      >
        <Button
          href={pdfUrl}
          download="John-Lukenoff-Resume.pdf"
          variant="contained"
          sx={{ marginRight: "8px" }}
        >
          Download PDF
        </Button>
        <Button
          href={docxUrl}
          download="John-Lukenoff-Resume.docx"
          variant="contained"
        >
          Download DOCX
        </Button>
      </Box>
    </Container>
  );
};

export default ResumePage;
