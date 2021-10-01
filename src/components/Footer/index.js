import React from "react";
import "./style.css"
import 'font-awesome/css/font-awesome.min.css';


function Footer(){
 return <div className="links">
 <a  href="https://www.linkedin.com/in/tyler-libstag-461b00124/"><img src="images/LI_logo.png"
   title="LinkedIn Profile" alt="My LinkedIn Profile" width="75" height="75" /></a>
 <a  href="mailto:tylerlibstag@gmail.com"><img src="images/Gmail-Logo.png" alt="My Gmail" width="75"
   height="75" /></a>
 <a  href="https://github.com/tylerlibstag" class="fa fa-github"><i className="fa fa-github"></i></a>
</div>

        
}

export default Footer;