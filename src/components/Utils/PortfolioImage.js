 import React from 'react';
 import "../../App.css"

function PortfolioImage(props) {
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

export default PortfolioImage;