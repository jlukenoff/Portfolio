import React from "react";
// import { Document } from "react-pdf";
import { ModuleContainer } from "../Styles/Styles";
import Fab from "@material-ui/core/Fab";
import CloudDownload from "@material-ui/icons/CloudDownload";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  resumeImg: {
    width: "80%",
    maxWidth: "800px",
    margin: "auto",
  },
  downloadButton: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "125px",
    position: "absolute",
    right: "10px",
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
      <Fab
        classes={{ root: classes.downloadButton }}
        variant="extended"
        component={(p) => <a {...p} />}
        href="https://storage.cloud.google.com/john-lukenoff-portoflio/static/Resume.pdf"
        target="_blank"
      >
        <CloudDownload color="primary" /> Download
      </Fab>
    </ModuleContainer>
  );
};

export default Resume;
