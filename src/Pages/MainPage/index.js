import React,{useState} from 'react';
import Curtain from "../../components/Curtain"
import "./mainStyle.css";

function Main() {
        
       

    return (
        <div >

            <div className="body">
               
                <div className="push">
                    
                </div>
                <h1 className="headA"> Welcome To My Website</h1>
                <h3 className="headB" ><input type="checkbox" value="check" />Click to Enter</h3>
                
                
                <Curtain />
            </div>

        </div>

    );
}
//onClick = {(e) => this.setState({click: !click.value})}
export default Main