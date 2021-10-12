import React from "react";
import './style.css'

import RazerLogo from '../../images/Razerlogo.JPG'
import JALogo from '../../images/JA.jpg'
import Boro from '../../images/Borough.JPG'
import SnD from '../../images/SnD.JPG'
import Cinder from '../../images/Cinder.JPG'
import Buttons from "../Buttons";



function ImagesDescriptions() {
   return (
      <div>
         <br></br>
         <br></br>
         <br></br>
         <div className="project">
            <div className="project-container-images">
               <img src={RazerLogo} className="razer" />
               <div>
                  <p class="description">Razer is known for building the worlds largest gamer-focused ecosystem of hardware services and software.
                     Their iconic logo is recognized by gaming and esports communites around the globe. Aside for my love for videogames, I am happy to have contributed to the visual layout of one of their most
                     utilized aspects of their website which is the the Razer RMA Process. </p>
                     <button class="button">Creative Process</button>
                     <button class="button2">Website</button>
                     

               </div>

            </div>
            <div className="project-container-images">
               <img src={JALogo} className="razer" />
               <div>
                  <p class="description">James Avery is an American made jewelry company Located in Texas Hill County. They offer finely crafted jewelry for both men and women.
                  Aside from rubies and sapphires, the real gem was being able to see this project through while also learning how to use the Policy Modeler Program. Similar to Razer, I played a role in the visual layout of James Avery's fundraising support and Corporate grants process.  </p>
                  <button class="button">Creative Process</button>
                  <button class="button2">Website</button>
               </div>

            </div>
            <div className="project-container-images">
               <img src={Boro} className="razer" />
               <div>
                  <p class="description">(Personal Project)A project created for users to apartment hunt from the comfort of their homes. (Update: our database and api keys are down but our visuals are still present! Click to explore) </p>
                  <button class="button">Creative Process</button>
                     <button class="button2">Website</button>
               </div>

            </div>
            <div className="project-container-images">
               <img src={SnD} className="razer" />
               <div>
                  <p class="description">(Personal Project) This project was created with the intent of helping both new and veteran gamers find fitting games based on the users criteria. Click to find the right game for you!  </p>
                  <button class="button">Creative Process</button>
                     <button class="button2">Website</button>
               </div>
               

            </div>
            <div className="project-container-images">
               <img src={Cinder} className="razer"  />
               <div>
                  <p class="description">(Personal Project) This project was created with the intent of helping both new and veteran gamers find fitting games based on the users criteria. Click to find the right game for you!  </p>
                  <button class="button">Creative Process</button>
                     <button class="button2">Website</button>
                     <Buttons label="button"/>
               </div>

            </div>
         </div>
      </div>
   )


}

export default ImagesDescriptions;