import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React from "react";

const StyledFooter = styled.footer({
  bottom: 0,
  height: "5rem",
  width: "100%",
  position: "absolute",
});

const Footer: React.FC = (props) => {
  return (
    <StyledFooter>
      <Grid
        container
        justifyContent="center"
        sx={{
          width: "100%",
        }}
      >
        {/* <Grid item>Contact me</Grid> */}
      </Grid>
    </StyledFooter>
  );
};

export default Footer;
