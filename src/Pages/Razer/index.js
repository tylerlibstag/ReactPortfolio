import React from "react";
import "../Razer/style.css"

import RazerImage from "../../components/Utils/RazerImage";

import {RazerArr} from "../../components/Utils/RazerProjects";

function Razer(props) {

    return (
        
        <div className="project"> <h1 className="header"> Razer</h1>
            <div className="project-container-razer">
                {RazerArr.map((props) => (
                    <div className="container" key={props.id}>
                        <RazerImage
                            title={props.title}
                            image={props.image} />
                        {/* <RazerProject
                            description={props.description}
                            title={props.title}
                            languages={props.languages}
                            deployedApp={props.deployedApp}
                            github={props.github}
                             /> */}
                    </div>

                ))}

            </div>
        </div>
    )
};

export default Razer;