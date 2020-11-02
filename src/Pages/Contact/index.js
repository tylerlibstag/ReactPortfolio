import React from "react";
import "./constyle.css"

function Contact() {
    return (
      
      <div class="body">
       
      <h1 className="head"> CONTACT</h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                
      <view>
          <div>
            <div class="form-group">
              <label>Name</label>
              <input type="text" class="form-control" placeholder="Enter name"></input>
            </div>
           
                
            <div class="form-group">
              <label>Email address</label>
              <input type="email" class="form-control" placeholder="Enter email"></input>
            </div>
            
                
            <div class="form-group">
              <label>Message</label>
              <textarea class="form-control" rows="10" cols="5"></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           
          </div>
          
          </view>
          
          </div>
          
       
    )
};

export default Contact;