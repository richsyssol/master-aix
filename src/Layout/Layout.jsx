import React from "react";
import { Outlet } from "react-router-dom";
import WhatsAppPopup from "../Componants/PopUp/WhatsAppPopup";
import ScrollToTop from "../Componants/ScrollToTop/ScrollToTop";

function Layout() {
  return (
    <div>
      <ScrollToTop />
      <Outlet />
      {/* <WhatsAppPopup /> */}
    </div>
  );
}

export default Layout;
