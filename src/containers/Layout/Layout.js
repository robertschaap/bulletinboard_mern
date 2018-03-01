import React from "react";
import Aux from "../Aux";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Layout = ({ children }) => (
  <Aux>
    <Navbar />
    {children}
    <Footer />
  </Aux>
)

export default Layout;
