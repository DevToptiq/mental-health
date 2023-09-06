import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useLocation } from "react-router-dom";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const footerVisibleRoutes = [
    "/",
    "/blog-detail",
    "/contactUs",
    "/blog",
    "/whatWeTreat",
    "/about",
  ];

  const isFooterVisible = footerVisibleRoutes.includes(location.pathname);

  return (
    <>
      <Header />
      {children}
      {isFooterVisible && <Footer />}
    </>
  )
}

export default AppLayout
