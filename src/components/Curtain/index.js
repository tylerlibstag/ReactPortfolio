import React from "react";
import "./style.css";
import "./mediaStyle.css";

function Curtain(){
  
  // const handleClick = (clicked) => {

  //   console.log("you got clicked", clicked)
  //   styles = {
  //     left: { transform: "translateX(0)" },
  //     right: { transform: "translateX(0)" }
  //   }
   
    

  // }
  // var styles = {
  //   left: { transform: "" },
  //   right: { transform: "" }
  // }
  // onClick={handleClick}
  return <div className="curtain">


    <div className="curtain__wrapper" >
      <input type="checkbox"/>
      <div className="curtain__panel curtain__panel--left"/>

      <div className="curtain__prize">
        
        
        <img src="images/me.jpg" className="me" alt="Image of me"/>
        <h2 className="bioHeader">Tyler Libstag</h2>
        <p className="about">
          I am an aspiring fullstack developer with a background in video game development and 3D art.
          Due to my passion for technical art, my skillset involves a multitude of different programs and languages
          such as Html, Css, JavaScript, node Js, c#, Maya, Unity, Photoshop, Illustrator, and After Affects. 
          I find myself performing at my peak when I am on a team. I find working and communicating on a team essential 
          when it comes to professional display</p>   
          
      </div>
      
      
      <div className="curtain__panel curtain__panel--right"/>
      
      </div>
  </div> 
        
}

export default Curtain;