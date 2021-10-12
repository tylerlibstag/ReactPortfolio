import React from 'react';
import "./utils.css";

function PortfolioDescription(props) {
    return ( 
        <div >
        <h2>{props.title}</h2>
        <p className="text">{props.description}</p>
        </div>
        
        
    )
};

export default PortfolioDescription;