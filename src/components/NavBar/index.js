import React from "react";
import "./style.css"


function NavBar() {
  return <div>

    <nav className="navbar navbar-expand  navbar-black bg-black">
    <img src="images/TL_logo.jpg" class="logo" alt="TL Logo"></img>
    
    
      <a className="navbar-brand" href="/main">Home</a>
      <a className="navbar-brand" href="/portfolio">Portfolio</a>
      
      <a className="navbar-brand" href="/razer">Razer</a>

      
      
    </nav>

  </div>

}

export default NavBar;