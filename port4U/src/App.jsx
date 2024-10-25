// THE MAIN APP WHERE THERE IS ONLY THE APP SPACE


// components imports
import Sidebar from "./componets/Sidebar";


// styles imports
import './App.css'


import React from "react";
import Overview from "./componets/Overview";

function APP() {  
  return (  
    <div className="hero">
      <Sidebar></Sidebar>
      <div className="row">
        <h1>Overview</h1>
          <div className="main-container">
            <div className="container">
              <Overview></Overview>
              </div> 
          </div>  
      </div>
    </div>
  );  
}  

export default APP;