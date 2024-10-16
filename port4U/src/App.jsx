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
    <div className="main-container">  
        <Sidebar></Sidebar>
        <Overview></Overview>
        
    </div>  
    </div>
  );  
}  

export default APP;