import React from "react";
import Footer from "./footer";

interface LayoutProps {
  children?: React.ReactNode;
}

const BackgroundGradient: React.FC = () => (
  <div
    className="fixed w-full h-full top-0 left-0 z-[-1]"
    style={{ background: "linear-gradient(180deg, #f7f7f7 0%, #ffffff 100%)" }}
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
