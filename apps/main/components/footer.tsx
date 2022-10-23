import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

const StyledFooter = styled.footer({
  bottom: 0,
  position: "relative",
});

const Footer: React.FC = (props) => {
  return (
    <StyledFooter>
      <Grid
        container
        sx={{
          width: "100%",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <Grid item>Contact me</Grid>
      </Grid>
    </StyledFooter>
  );
};

export default Footer;
