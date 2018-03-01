import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import ReadPage from "./ReadPage/ReadPage";
import WritePage from "./WritePage/WritePage";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ReadPage />
        <WritePage />
        <Footer />
      </div>
    );
  }
}

export default App;
