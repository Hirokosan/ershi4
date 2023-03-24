import './app.less';
import { HashRouter, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Home from './pages/home';
import Login from './pages/login';
import Regist from './pages/regist';
import Detail from './pages/detail'
function App() {
  return (
    <HashRouter>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/detail/:id" component={Detail}></Route>
          <Route exact path="/regist" component={Regist}></Route>

        </div>
      </ Switch>

    </HashRouter>
  );
}

export default App;
