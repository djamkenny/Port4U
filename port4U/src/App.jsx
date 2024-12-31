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
import Portfolio from './pages/Portfolio';
import Mini_Community from './pages/Mini-Community';
import Manage_Account from './pages/Manage-Account';
import Inbox from './pages/Inbox';
import Customer_Service from './pages/Customer-Service';
import Settings from './pages/Settings';
import Chat_bot from './pages/Chat-bot';

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
                <Route path="/overview" element={<Overview/>} /> */
                <Route path="/videotube" element={<VideoTube/>} />
                <Route path="/hackathon" element={<Hackathon/>} />
                <Route path="/community" element={<Community/>} />
                <Route path="/recruitment" element={<Recruitment/>} />
                <Route path="/project" element={<Project/>} />
                <Route path="/mentorship" element={<Mentorship/>} />

                {/* Myspace section */}
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
                <Route path="/Mini-community" element={<Mini_Community/>} />
                <Route path="/Manage-Account" element={<Manage_Account/>} />
                <Route path="/inbox" element={<Inbox/>} />
                
                {/* support section */}
                <Route path="/customer-service" element={<Customer_Service/>} />
                <Route path="/settings" element={<Settings/>} />
                <Route path="/chat-bot" element={<Chat_bot/>} />
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