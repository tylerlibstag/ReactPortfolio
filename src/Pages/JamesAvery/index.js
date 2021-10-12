import React from "react";
import "../JamesAvery/style.css"

import JamesAveryImage from "../../components/Utils/JamesAveryImage";
import JamesAveryDescription from "../../components/Utils/PortfolioDescription"
import {JamesArr} from "../../components/Utils/JamesAveryProjects";

function Razer(props) {

    return (
        
        <div className="project"> 
        <h1 className="JAheader">James Avery</h1>
        <p className="header2">Languages/Frameworks:</p>
        <p className="header3">HTML/CSS/Javascript/PHP/Oracle/MVC/Jquery</p>
            <div className="project-container-razer">
                {JamesArr.map((props) => (
                    <div className="container" key={props.id}>
                        <JamesAveryImage
                            title={props.title}
                            image={props.image} 
                            />
                        <JamesAveryDescription
                            description={props.description}
                            />
                        
                    </div>

                ))}

            </div>
        </div>
    )
};

export default Razer;