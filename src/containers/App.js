import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ReadPage from "./ReadPage";
import WritePage from "./WritePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Route exact path="/" component={ReadPage} />
          <Route path="/writesomething" component={WritePage} />
          <Route path="/readsomething" component={ReadPage} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
