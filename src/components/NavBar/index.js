import React from "react";
import "./style.css"


function NavBar() {
  return <div>
 
    <nav className="menu navbar navbar-expand  navbar-black bg-black ">
      <img src="images/TL_logo.jpg" class="logo" alt="TL Logo"></img>


      {/*       
       <li class="menu-item active"><a className="navbar-brand" href="/main">Home</a></li>
      <a className="navbar-brand" href="/JamesAvery">JamesAvery</a>
      
      <a className="navbar-brand" href="/razer">Razer</a>
      <a className="navbar-brand" href="/Boroughd">Boroughd</a>
      <a className="navbar-brand" href="/Cinder">Cinder</a>
      <a className="navbar-brand" href="/FirstSavings">FirstSavings</a>
      
     */}




      <div class="menu">
        <ol>
          <li class="menu-item "><a href="/main" class="menu-tag">Home</a></li>

          <li class="menu-item">
            <a class="menu-tag" href="#0">Creative Process</a>
            <ol class="sub-menu">
              <li class="menu-item"><a href="/JamesAvery">JamesAvery</a></li>
              <li class="menu-item"><a href="/razer">Razer</a></li>
              <li class="menu-item"><a href="/Boroughd">Boroughd</a></li>
              <li class="menu-item"><a href="/Cinder">Cinder</a></li>
              <li class="menu-item"><a href="/FirstSavings">FirstSavings</a></li>
            </ol>
          </li>

        </ol>
      </div>
    </nav>
  </div>



}

export default NavBar;