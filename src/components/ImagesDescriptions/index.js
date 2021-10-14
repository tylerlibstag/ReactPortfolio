import React from "react";
import './style.css'

import RazerLogo from '../../images/Razerlogo.JPG'
import JALogo from '../../images/JA.jpg'
import Boro from '../../images/Borough.JPG'
import FS from '../../images/FirstSavings.jpg'
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
                  <button class="button"><a href="/razer">Creative Process</a></button>
                  <button class="button2"><a href="https://tst2.dev.mysupport.razer.com/app" target="_blank">Website</a></button>


               </div>

            </div>
            <div className="project-container-images">
               <img src={JALogo} className="razer" />
               <div>
                  <p class="description">James Avery is an American made jewelry company Located in Texas Hill County. They offer finely crafted jewelry for both men and women.
                     Aside from rubies and sapphires, the real gem was being able to see this project through while also learning how to use the Policy Modeler Program. Similar to Razer, I played a role in the visual layout of James Avery's fundraising support and Corporate grants process.  </p>
                     <button class="button"><a href="/JamesAvery">Creative Process</a></button>
                  <button class="button2"><a href="https://jamesavery.custhelp.com/app/home" target="_blank">Website</a></button>
               </div>
            </div>
            <div className="project-container-images">
               <img src={FS} className="razer" />
               <div>
                  <p class="description">First Savings bank has been around since 1913 and started in south Dakota. The family owned business has expanded to locations such as, New Mexico Nevada, Nebraska, Texas and Arizona.
                     Unironically, First Savings bank was the first company project I had worked on. My contribution was setting up part of the support page powered by Oracle </p>
                     <button class="button"><a href="/FirstSavings">Creative Process</a></button>
                  <button class="button2"><a href="https://opn-infolexa1.rightnowdemo.com/" target="_blank">Website</a></button>
                 
               </div>

            </div>
            
            <div className="project-container-images">
               <img src={Boro} className="razer" />
               <div>
                  <p class="description">(Personal Project)A project created for users to apartment hunt from the comfort of their homes. (Update: our database and api keys are down but our visuals are still present! Click to explore) </p>
                  <button class="button"><a href="/Boroughd">Creative Process</a></button>
                  <button class="button2"><a href="https://aptreact.web.app/" target="_blank">Website</a></button>
               </div>

            </div>

            <div className="project-container-images">
               <img src={Cinder} className="razer" />
               <div>
                  <p class="description">(Personal Project) NOT A DATING APP. This project was created with the intent of helping bootcamp/college/grad students connect over common interests in the tech industry. Users can put what their interest in their bio and be matched up with people who have similar likes. There is a chat functionality, Meet up recommender with built with a location api, and an interest board. Click to see more!  </p>
                  <button class="button"><a href="/Cinder">Creative Process</a></button>
                  <button class="button2"><a href="https://project2-cinder.herokuapp.com/" target="_blank">Website</a></button>
                
               </div>

            </div>
         </div>
      </div>
   )


}

export default ImagesDescriptions;