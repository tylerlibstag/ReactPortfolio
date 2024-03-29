
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./Pages/Projects";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './Pages/MainPage';
import Razer from './Pages/Razer';
import James from './Pages/JamesAvery';
import Boroughd from './Pages/Boroughd';
import Cinder from './Pages/Cinder';
import FirstSavings from './Pages/FirstSavings';
import Logo from "./components/Logo"


function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Logo/>
        <Switch>
          <Route exact path={["/", "/main"]} component={Main} />
   
          <Route exact path="/razer" component={Razer} />
          <Route exact path="/JamesAvery" component={James} />
          <Route exact path="/Boroughd" component={Boroughd}/>
          <Route exact path="/Cinder" component={Cinder} />
          <Route exact path="/FirstSavings" component={FirstSavings}/>

          
          
        </Switch>
        
      </div>
      <Footer/>
    </Router>
  );
}
export default App;