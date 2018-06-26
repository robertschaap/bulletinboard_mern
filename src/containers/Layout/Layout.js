import React from "react";
import Aux from "../Aux";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Layout = ({ children }) => (
  <Aux>
    <Navbar />
    {children}
    <Footer />
  </Aux>
);

export default Layout;
