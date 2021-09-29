
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./Pages/Projects";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './Pages/MainPage';
import Razer from './Pages/Razer';

import Logo from "./components/Logo"


function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Logo/>
        <Switch>
          <Route exact path={["/", "/main"]} component={Main} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/razer" component={Razer} />
          
          
        </Switch>
        
      </div>
      <Footer/>
    </Router>
  );
}
export default App;