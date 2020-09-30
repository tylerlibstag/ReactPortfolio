import React from "react";
import "./style.css"

function Curtain(props){
    
    return <div className="curtain">


    <div className="curtain__wrapper">
      <input type="checkbox"/>
      <div className="curtain__panel curtain__panel--left"/>

      <div className="curtain__prize">
        <h1 className="empty"></h1>
        <img src="images/me.jpg" className="me" alt="Image of me"/>
        <h2 className="bioHeader">Tyler Libstag-BIO</h2>
        <p className="aboutme">
          I am an aspiring fullstack developer with a background in video game development and 3D art.
          Due to my passion for technical art, my skillset involves a multitude of different programs and languages
          such as Html, Css, JavaScript, node Js, c#, Maya, Unity, Photoshop, Illustrator, and After Affects. 
          I find myself performing at my peak when I am on a team. I find working and communicating on a team essential 
          when it comes to professional display 
        </p>
        
          
  
      </div>
      <div className="curtain__panel curtain__panel--right"/>
    </div>
  </div> 
        
}

export default Curtain;