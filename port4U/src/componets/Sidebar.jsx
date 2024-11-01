// sidebar contain logo 
// contains 3 sections
// functionality is to be able to clcik to expand and collapse



import './component_css/Sidebar.css'  
import React, { useState, useEffect } from 'react';   

const Sidebar = () => {  
    const [isOpen, setIsOpen] = useState(window.innerWidth > 768); // Set to true if larger than 768px  
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 898);  

    const toggleSidebar = () => {  
        if (isMobile) {  
            setIsOpen(!isOpen);  
        }  
    };  

    const handleResize = () => {  
        setIsMobile(window.innerWidth <= 898);  
        if (window.innerWidth > 898) {  
            setIsOpen(true); // Keep the sidebar open on larger screens  
        } else {  
            setIsOpen(false); // Close the sidebar on smaller screens  
        }  
    };  

    useEffect(() => {  
        window.addEventListener('resize', handleResize);  
        return () => {  
            window.removeEventListener('resize', handleResize);  
        };  
    }, []);  

    return (  
        <div className="app-container">  
            <button className={`toggle-button ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>  
                <span className="bar"></span>  
                <span className="bar"></span>  
                <span className="bar"></span>  
            </button>  
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>  
                <div className="logo">Port4U</div>  
                <div className="section">  
                    <h3>General</h3>  
                    <ul>  
                        <a href="/overview"><li>Overview Dashboard</li></a>
                        <a href="/videotube"><li>VideoTube</li></a>
                        <a href="/Community"><li>Community</li></a>
                        <a href="/Recruitment"><li>Recruitment</li></a>
                        <a href="/Project"><li>Projects and Innovations</li></a>
                        <a href="/Mentorship"><li>Mentorship Programs</li></a>
                        <a href="/Hackathon"><li>Hackathons</li></a>
                        
                    </ul>  
                </div>  
                <div className="section">  
                    <h3>My Space</h3>  
                    <ul>  
                        <li>Dashboard</li>  
                        <li>Portfolio</li>  
                        <li>Mini Community</li>  
                        <li>Inbox</li>  
                        <li>Manage Account</li>  
                    </ul>  
                </div>  
                <div className="section">  
                    <h3>Supports</h3>  
                    <ul>  
                        <li>Customer Service</li>  
                        <li>Settings</li>  
                        <li>Chat with AI bot</li>  
                    </ul>  
                </div>  
                <div className="user">  
                    <img src="enoch.jpg"  className="user-img" /> 
                    {/* hard coding here!! user must be able to set their own user profile */}
                    <span>Josh Roberton</span>  
                </div>  
            </div>  
        </div>  
    );  
};  

export default Sidebar;  