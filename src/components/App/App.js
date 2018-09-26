import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../Login'
import Header from '../Header'
import Home from '../Home'
import Detail from '../Detail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
