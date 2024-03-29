import React from "react";
import "../Razer/style.css"

import RazerImage from "../../components/Utils/RazerImage";
import RazerDescription from "../../components/Utils/PortfolioDescription"
import {RazerArr} from "../../components/Utils/RazerProjects";

function Razer(props) {

    return (
        
        <div className="project"> 
        <h1 className="header"> Razer</h1>
        <p className="header2">Languages/Frameworks:</p>
        <p className="header3">HTML/CSS/Javascript/PHP/Oracle/MVC</p>
            <div className="project-container-razer">
                {RazerArr.map((props) => (
                    <div className="container" key={props.id}>
                        <RazerImage
                            title={props.title}
                            image={props.image} 
                            />
                        <RazerDescription
                            description={props.description}
                            />
                        
                    </div>

                ))}

            </div>
        </div>
    )
};

export default Razer;