import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ReadPageContainer from './ReadPageContainer';
import WritePageContainer from './WritePageContainer';
import Layout from '../components/Layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={ReadPageContainer} />
          <Route path="/writesomething" component={WritePageContainer} />
          <Route path="/readsomething" component={ReadPageContainer} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
