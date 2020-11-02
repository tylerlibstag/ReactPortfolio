import React from 'react';
import "./utils.css"

function PortfolioDescription(props) {
    return ( 
        <div >
        <h2>{props.title}</h2>
        <p className="text">{props.description}</p>
        <h3 className="text">{props.languages}</h3>
        <p><button className="button"><a href={props.github}>Github</a></button> </p>
       <p><button className="button"><a  href={props.deployedApp}>Deployed App</a></button></p>
        
        </div>
        
        
    )
};

export default PortfolioDescription;