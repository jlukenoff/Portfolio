import Image, { ImageProps } from "next/image";
import React from "react";
import backgroundImage from "../public/background.jpg";
import { styled } from "@mui/material/styles";

interface BackgroundProps {
  children?: React.ReactNode;
}

const BgImage = styled("div")({
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: -2,
  background: `url(${backgroundImage.src}) center top / cover no-repeat`,
  backgroundAttachment: "fixed",
});

const Gradient = styled("div")({
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  backgroundColor: "#fff",
  opacity: 0.5,
  zIndex: -1,
});

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <>
      <BgImage />
      <Gradient />
      {children}
    </>
  );
};

export default Background;
