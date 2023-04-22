import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Images from "../config/images";
import Image from "next/image";
import loader from "../utils/images";

const Footer: React.FC = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100px",
        backgroundColor: "primary.main",
      }}
      component="footer"
    >
      <Typography variant="h6" component="h2" sx={{ marginBottom: "8px" }}>
        Contact Me
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {[
          {
            label: "linkedin",
            url: "https://linkedin.com/in/jlukenoff",
            img: Images.Linkedin,
          },
          {
            label: "github",
            url: "https://github.com/jlukenoff",
            img: Images.Github,
          },
          {
            label: "email",
            url: "mailto:john@jlukenoff.com",
            img: Images.Email,
          },
        ].map(({ label, url, img }) => (
          <IconButton
            href={url}
            key={label}
            aria-label={`${label} icon`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              "& > span": {
                overflow: "visible !important",
              },
              "& > span > img": {
                filter: "invert(100%) brightness(100%)",
                transition: "transform 0.3s ease-in-out", // Add a smooth transition for the transform
              },
              "&:hover > span > img": {
                transform: "scale(1.2)", // Scale the image when hovered
              },
            }}
          >
            <Image
              loader={loader}
              width={24}
              height={24}
              src={img}
              alt={`${label} logo`}
            />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
