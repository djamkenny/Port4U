// THE MAIN APP WHERE THERE IS ONLY THE APP SPACE


// components imports
import Sidebar from "./componets/Sidebar";

// styles imports
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';  
import React from "react";

import Overview from "./pages/Overview";
import Recruitment from './pages/Recruitment';  
import Community from './pages/Community';   
import Hackathon from './pages/Hackathon';  
import VideoTube from './pages/VideoTube';  
import Project from './pages/Project';
import Mentorship from './pages/Mentorship';
import Dashboard from './pages/Dashboard';

function APP() {  
  return (
    <div className="hero">
      <Sidebar></Sidebar>
      <div className="row">
        {/* <h1>Overview</h1> */}
          <div className="main-container">
            <div className="container">
              <BrowserRouter>
              <Routes>
                <Route index element={<Overview/>} />
                <Route path="/Overview" element={<Overview/>} /> */
                <Route path="/videotube" element={<VideoTube/>} />
                <Route path="/hackathon" element={<Hackathon/>} />
                <Route path="/community" element={<Community/>} />
                <Route path="/recruitment" element={<Recruitment/>} />
                <Route path="/project" element={<Project/>} />
                <Route path="/mentorship" element={<Mentorship/>} />

                {/* the rest of the navigation start from here */}
                <Route path="/dashboard" element={<Dashboard/>} />
                {/* <Route path="/mentorship" element={<Mentorship/>} />
                <Route path="/mentorship" element={<Mentorship/>} />
                <Route path="/mentorship" element={<Mentorship/>} />
                <Route path="/mentorship" element={<Mentorship/>} /> */}
              </Routes>
              </BrowserRouter>
              {/* <Overview></Overview> */}
              </div> 
          </div>  
      </div>
    </div>
  );  
}  

export default APP;