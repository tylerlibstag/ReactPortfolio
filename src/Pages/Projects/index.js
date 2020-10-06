import React from "react";
import { portfolioArr } from "../../components/Utils/Projects";
import Portfolioimage from "../../components/Utils/PortfolioImage"
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer"
import PortfolioDescription from "../../components/Utils/PortfolioDescription"
import Container from "../../components/Container"

function Portfolio() {

    return (
       
        portfolioArr.map((props) => (
            <div className="bod">
            <div key={props.id}>
               
                <Portfolioimage
                    title={props.title}
                    image={props.image} />
                <PortfolioDescription description={props.description}/>
                

            </div>
            </div>




        ))
        
    )
};

export default Portfolio;