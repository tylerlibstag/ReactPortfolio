import React from "react";
import "./style.css"


function NavBar() {
  return <div>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <a className="navbar-brand" href="/main">Home</a>
      <a className="navbar-brand" href="/portfolio">Portfolio</a>
      

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active"> </li>
          <li className="nav-brand"></li>
        </ul>
      </div>
    </nav>

  </div>

}

export default NavBar;