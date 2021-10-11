import React, { useState } from 'react';

import "./mainStyle.css";
import ImagesDescriptions from '../../components/ImagesDescriptions';
import ME from '../../images/mee.png'


function Main() {



    return (
        <div >

            <div className="body">

                <div id="header1">
                    <h1 className="headA"> Welcome To My Website</h1>
                    <img src={ME} className="me" alt="Image of me" />


                    <h1 className="intro">Tyler Libstag</h1>
                    <br></br>
                    <h3 className="intro">
                        ...Fullstack Developer<br>
                        </br>
                        Game Designer<br>
                        </br>
                        Visionary...
                    </h3>
                   


                </div>

                <br></br>
                 
                 <ImagesDescriptions/>

            </div>

        </div>

    );
}
//onClick = {(e) => this.setState({click: !click.value})}
export default Main
