import React from "react";
import Images from "../config/images";
import loader from "../utils/images";
import { styled } from "@mui/material/styles";
import Footer from "./footer";

interface LayoutProps {
  children?: React.ReactNode;
}

const BgImage = styled("div")({
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: -2,
  background: `url(${(loader as any)({
    src: Images.Background,
  })}) center top / cover no-repeat`,
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

const PageLayout = styled("div")(({ theme }) => {
  return {
    width: "auto",
    maxWidth: "926px",
    minHeight: `calc(100vh - ${theme.spacing(5)})`,
    position: "relative",
    margin: `${theme.spacing(5)} auto`,
  };
});

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <BgImage />
      <Gradient />
      <PageLayout>{children}</PageLayout>
      <Footer />
    </>
  );
};

export default Layout;
