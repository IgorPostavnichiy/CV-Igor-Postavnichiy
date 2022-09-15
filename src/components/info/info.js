import React from "react";
import './info.css';
import logo from './images/logo.jpg'; 


function Avatar () {
  return (
    <div>
      <img src={logo} alt="logotip" />  </div>
  );
}


const Info = () => {
    return (
      <>    
      <div className="header">
        <Avatar />
          <div className="header-text">  
            <div>
                <h2>Igor Postavnichiy</h2>
            </div>
              <div>
                  <p><em>Web-Developer | Kharkiv, Ukraine</em></p>
              </div>
              <div>
                  <p>31 years old</p>
              </div>
              <h6>SKILLS:</h6>
              <ul>
                <li>HTML5 / CSS3 ( SASS, SCSS ) / Bootstrap / BEM methodology</li>
                <li>JavaScript ( ES6+ )</li>
                <li>React/Redux</li>
                <li>Angular/TypeScript</li>
                <li>Git</li>
              </ul>
          </div> 
      </div>
      </>
    );
  };

  export default Info;