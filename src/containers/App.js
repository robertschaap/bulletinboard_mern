import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ReadPage from "./ReadPage";
import WritePage from "./WritePage";
import Layout from "../components/Layout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={ReadPage} />
          <Route path="/writesomething" component={WritePage} />
          <Route path="/readsomething" component={ReadPage} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
