import React from 'react';
import logo from './logo.svg';
import "../src/components/Curtain/style.css";
import Curtain from './components/Curtain';
import "./App.css"

function App() {
  const handleClick = (clicked) => {

    console.log("you got clicked", clicked)
    styles = {
      left: { transform: "translateX(0)" },
      right: { transform: "translateX(0)" }
    }
    

  }
  var styles = {
    left: { transform: "" },
    right: { transform: "" }
  }

  return (
    <div >
      <body className="bod">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <a className="navbar-brand" href="index.html">Home</a>
        <a className="navbar-brand" href="Portfolio.html">Portfolio</a>
        <a className="navbar-brand" href="contact.html">Contact</a>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active"> </li>
            <li className="nav-brand"></li>
          </ul>
        </div>
      </nav>
     

      <h1 className="header">    Welcome To My Website
      
      </h1>
      <h3 className="header3">(Click To Enter)</h3>

      <Curtain/>



      <div className="links">
        <a className="GM" href="https://www.linkedin.com/in/tyler-libstag-461b00124/"><img src="images/LI_logo.png"
          title="LinkedIn Profile" alt="My LinkedIn Profile" width="75" height="75" /></a>
        <a className="GM" href="mailto:tylerlibstag@gmail.com"><img src="images/Gmail-Logo.png" alt="My Gmail" width="75"
          height="75" /></a>
        <a className="GM" href="https://github.com/tylerlibstag"><img src="images/GitHub-Logo.png" title="GitHub Profile"
          alt="My Github Profile" width="75" height="75" /></a>
      </div>

      </body>
    </div>
  
  );
}

export default App;
