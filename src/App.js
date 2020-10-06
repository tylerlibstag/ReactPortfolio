
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./Pages/Projects";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './Pages/MainPage';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={["/", "/main"]} component={Main} />
          <Route exact path="/portfolio" component={Portfolio} />
          {/* <Route exact path="/contact" component={Contact} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
        
      </div>
      <Footer/>
    </Router>
  );
}
export default App;