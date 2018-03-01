import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Aux from "../containers/Aux";

import ReadPage from "./ReadPage/ReadPage";
import WritePage from "./WritePage/WritePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Aux>
          <Route exact path="/" component={ReadPage} />
          <Route path="/writesomething" component={WritePage} />
          <Route path="/readsomething" component={ReadPage} />
        </Aux>
      </BrowserRouter>
    );
  }
}

export default App;
