import React from "react";
import { Outlet } from "react-router-dom";
import WhatsAppPopup from "../Componants/PopUp/WhatsAppPopup";
import ScrollToTop from "../Componants/ScrollToTop/ScrollToTop";
import AnimatedRobotCTA from "../Componants/AnimatedRobotCTA/AnimatedRobotCTA";

function Layout() {
  return (
    <div>
      <ScrollToTop />
      <WhatsAppPopup />
      <Outlet />
    </div>
  );
}

export default Layout;
