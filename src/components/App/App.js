import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from '../Header'
import Home from '../Home'
import Detail from '../Detail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail" exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
