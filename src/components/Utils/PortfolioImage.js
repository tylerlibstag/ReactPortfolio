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
                className="GM" alt={props.title} width="300" height="300"  />
        </div>
        
    )
};

export default PortfolioImage;