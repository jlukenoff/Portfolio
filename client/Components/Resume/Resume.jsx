import React from "react";
// import { Document } from "react-pdf";
import { ModuleContainer } from "../Styles/Styles";
import { Fab } from "@material-ui/core";
import CloudDownload from "@material-ui/icons/CloudDownload";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  resumeImg: {
    width: "80%",
    maxWidth: "800px",
    margin: "auto",
  },
  downloadButton: {
    "& a": {
      padding: "15px",
    },
  },
});
const Resume = () => {
  const classes = useStyles();
  return (
    <ModuleContainer>
      <img
        src="https://storage.cloud.google.com/john-lukenoff-portoflio/static/Resume.png"
        className={classes.resumeImg}
      />
      <Fab className={classes.downloadButton}>
        <a
          href="https://storage.cloud.google.com/john-lukenoff-portoflio/static/Resume.pdf"
          target="_blank"
        >
          <CloudDownload color="primary" />
        </a>
      </Fab>
    </ModuleContainer>
  );
};

export default Resume;
