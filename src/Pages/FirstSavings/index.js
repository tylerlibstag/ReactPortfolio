import React from "react";
import "../FirstSavings/style.css"

import PortfolioImage from "../../components/Utils/PortfolioImage";
import PortfolioDescription from "../../components/Utils/PortfolioDescription"
import {FSArr} from "../../components/Utils/FirstSavingsProject";

function FirstSavings(props) {

    return (
        
        <div className="project"> 
        <h1 className="FSheader">FirstSavings</h1>
        <p className="header2">Languages/Frameworks:</p>
        <p className="header3">HTML/CSS/PHP/Oracle/MVC/Photoshop</p>
            <div className="project-container-razer">
                {FSArr.map((props) => (
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

export default FirstSavings;