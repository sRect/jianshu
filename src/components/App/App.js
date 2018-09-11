import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from '../Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <div>
            <Route path="/" exact render={() => <div>home</div>}></Route>
            <Route path="/detail" exact render={() => <div>detail</div>}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
