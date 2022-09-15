import React from "react";
import ReactDOM from "react-dom";
import Info from './components/info/info';
import Navigation from './components/navigation/navigation';
import InfoText from './components/info-text/info-text';
import ContactMe from './components/contact-me/contact-me'
import './index.css';
import Experience from "./components/experience/experience";
import Education from "./components/education/education";
import ContactSocials from "./components/contact-socials/contact-socials";
import Hobby from "./components/hobby/hobby";
import Courses from "./components/courses/courses";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="container">
          <Info />
          <Navigation />
          <InfoText />
            <Routes>   
              <Route path="/experience" element={<Experience />}> </Route>
              <Route path="/education" element={<Education />}> </Route>
              <Route path="/contact-socials" element={<ContactSocials />}> </Route>
              <Route path="/courses" element={<Courses />}> </Route> 
              <Route path="/hobby" element={<Hobby />}> </Route> 
            </Routes>
          <ContactMe />
      </div>
    </Router>
);
};
ReactDOM.render(<App />, document.getElementById('root'));