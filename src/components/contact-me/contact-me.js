import React from "react";
import './contact-me.css';

const ContactMe = () => {
    return (
      <form className="form" >
  
        <h5>Contact Me</h5>
            <div className="form-row">
                <div className="form-group">
                  <span className="form">Enter your name: </span>
                    <input placeholder="Your name"/>
                </div>
                <div className="form-group" >
                    <span className="form">Enter your e-mail: </span>
                      <input placeholder="Your e-mail"/>
                </div>
                </div>
              <div className="form-group">
                <span className="form">Enter your message: </span>
                  <textarea placeholder="Text message..." />
              </div>
              <div>
                <button type="submit" className="btn">Send!</button>
              </div>    
      </form>
    );
  };
  
  export default ContactMe;