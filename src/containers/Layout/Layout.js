import React, { Fragment } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Layout = ({ children }) => (
  <Fragment>
    <Navbar />
    {children}
    <Footer />
  </Fragment>
);

export default Layout;
