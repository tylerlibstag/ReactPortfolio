import React from 'react';
import "../../App.css"

function JamesAveryImage(props) {
   return (
       
       <div
        style={{display:"grid",
         gridTemplateColums:"",
         overflow:"auto"}}
         >
           <img src={props.image}
               className="" alt={props.title} width="100%" height="auto"  />
       </div>
       
   )
};

export default JamesAveryImage;