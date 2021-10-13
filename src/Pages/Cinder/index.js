import React from "react";
import "../Cinder/style.css"

import PortfolioImage from "../../components/Utils/PortfolioImage";
import PortfolioDescription from "../../components/Utils/PortfolioDescription"
import {CinderArr} from "../../components/Utils/CinderProject";

function Cinder(props) {

    return (
        
        <div className="project"> 
        <h1 className="Cinderheader">Cinder</h1>
        <p className="header2">Languages/Frameworks:</p>
        <p className="header3">HTML/CSS/Javascript/REACT.js/Node.js</p>
            <div className="project-container-razer">
                {CinderArr.map((props) => (
                    <div className="container" key={props.id}>
                        <PortfolioImage
                            title={props.title}
                            image={props.image} 
                            />
                        <PortfolioDescription
                            description={props.description}
                            />
                        
                    </div>

                ))}

            </div>
        </div>
    )
};

export default Cinder;