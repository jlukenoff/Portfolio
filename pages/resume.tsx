// pages/resume.tsx
import React from "react";

const ResumePage = () => {
  const pdfUrl =
    "https://jlukenoff-portfolio-static-assets.s3.amazonaws.com/public/static/Resume.pdf";
  const docxUrl =
    "https://jlukenoff-portfolio-static-assets.s3.amazonaws.com/public/static/Resume.docx";

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center my-4 text-gray-700">My Resume</h1>
      <div className="mb-4">
        <iframe
          src={pdfUrl}
          width="100%"
          height="600px"
          className="border-none"
          title="Resume PDF"
        ></iframe>
      </div>
      <div className="flex justify-center mb-4">
        <a
          href={pdfUrl}
          download="John-Lukenoff-Resume.pdf"
          className="btn btn-primary mr-2"
        >
          Download PDF
        </a>
        <a
          href={docxUrl}
          download="John-Lukenoff-Resume.docx"
          className="btn btn-primary"
        >
          Download DOCX
        </a>
      </div>
    </div>
  );
};

export default ResumePage;
