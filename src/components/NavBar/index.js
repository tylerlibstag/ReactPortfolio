import React from "react";
import "./style.css"


function NavBar (){
 return <div>
      {/* <div class="fixed-top">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h5 class="text-white h4">Collapsed content</h5>
      <span class="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div> */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

    <a className="navbar-brand" href="/main">Home</a>
    <a className="navbar-brand" href="/portfolio">Portfolio</a>
    <a className="navbar-brand" href="contact.html">Contact</a>
    
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