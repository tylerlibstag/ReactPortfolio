import React from "react";
import "../Boroughd/style.css"

import PortfolioImage from "../../components/Utils/PortfolioImage";
import PortfolioDescription from "../../components/Utils/PortfolioDescription"
import {BoroArr} from "../../components/Utils/BoroProject";

function Boroughd(props) {

    return (
        
        <div className="project"> 
        <h1 className="Boroheader">borough'd</h1>
        <p className="header2">Languages/Frameworks:</p>
        <p className="header3">REACT.js/JAVASCRIPT/CSS/Mongo.DB/Multer/FireBase</p>
            <div className="project-container-razer">
                {BoroArr.map((props) => (
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

export default Boroughd;