import React from "react";
import "./style.css"


function NavBar() {
  return <div>

    <nav className="navbar navbar-expand  navbar-dark bg-dark">
    <img src="images/TL_logo.jpg" class="logo" alt="TL Logo"></img>
    
  
      <a className="navbar-brand" href="/main">Home</a>
      <a className="navbar-brand" href="/portfolio">Portfolio</a>
      
      
    </nav>

  </div>

}

export default NavBar;