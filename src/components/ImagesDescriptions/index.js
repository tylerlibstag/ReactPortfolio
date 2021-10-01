import React from "react";
import './style.css'
import RazerLogo from '../../images/Razerlogo.JPG'


function ImagesDescriptions() {
   return (
      <div>
         <div className="project">
            <div className="project-container-images">
               <img src={RazerLogo} className="razer" />
               <div>
               <p class="description">Razer is known for building the worlds largest gamer-focused ecosystem of hardware services and software.
                  Their iconic logo is recognized by gaming and esports communites around the globe. Aside for my love for videogames, I am happy to have contributed to the visual layout of one of their most
                  utilized aspects of their website which is the the Razer RMA Process. </p> 
                  
                  </div>
            </div>
         </div>
      </div>
   )


}

export default ImagesDescriptions;