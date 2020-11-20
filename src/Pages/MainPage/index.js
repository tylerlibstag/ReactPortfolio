import React,{useState} from 'react';
import Curtain from "../../components/Curtain"
import "./mainStyle.css";

function Main() {

    // var [click, setClick] = useState({
    //     click: false
    // });
    
   
    // setClick(prevState => ({
    //     click: !prevState.click
    //   }));
        
       

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
                <h3 className="headB" ><input type="checkbox" value="check" />Click to Enter</h3>
                
                
                <Curtain />
            </div>

        </div>

    );
}
//onClick = {(e) => this.setState({click: !click.value})}
export default Main