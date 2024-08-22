import React from "react";
import Images from "../config/images";
import loader from "../utils/images";
import { styled } from "@mui/material/styles";
import Footer from "./footer";

interface LayoutProps {
  children?: React.ReactNode;
}

const BackgroundGradient: React.FC = () => (
  <div
    className="fixed w-full h-full top-0 left-0 z-[-1]"
    style={{ backgroundColor: "#f7f7f7" }}
  />
);

const PageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-auto min-h-[calc(100vh-1.25rem)] relative my-5 mx-auto">
      {children}
    </div>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <BackgroundGradient />
      <PageLayout>{children}</PageLayout>
      <Footer />
    </>
  );
};

export default Layout;
