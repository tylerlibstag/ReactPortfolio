import React from "react";
import { portfolioArr } from "../../components/Utils/Projects";
import Portfolioimage from "../../components/Utils/PortfolioImage"

import PortfolioDescription from "../../components/Utils/PortfolioDescription"
import "../Projects/style.css"

function Portfolio(props) {

    return (
        <div className="project"> <h1 className="header"> Projects</h1>
            <div className="project-container">
                {portfolioArr.map((props) => (
                    <div className="container" key={props.id}>
                        <Portfolioimage
                            title={props.title}
                            image={props.image} />
                        <PortfolioDescription
                            description={props.description}
                            title={props.title}
                            languages={props.languages}
                            deployedApp={props.deployedApp}
                            github={props.github}
                             />
                    </div>

                ))}

            </div>
        </div>
    )
};

export default Portfolio;