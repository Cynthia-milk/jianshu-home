import React, { Component } from 'react';
import Header from './common/Header'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home';
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import store from './store'
import Write from './pages/write'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store} >

           
            <BrowserRouter>
              <div>
              <Header />
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail/:id' exact component={Detail}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/write' exact component={Write}></Route>
              </div>
            </BrowserRouter>
        </Provider>

      </div>
    );
  }
}

export default App;
