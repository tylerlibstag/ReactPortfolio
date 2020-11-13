import React from 'react';

import Curtain from "../../components/Curtain"
import "./mainStyle.css";
function Main() {


    return (
        <div >

            <div className="body">
               
                <div className="push">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <h1 className="headA"> Welcome To My Website</h1>
                <h3 className="headB">(Click To Enter)</h3>
                
                
                <Curtain />
            </div>

        </div>

    );
}

export default Main