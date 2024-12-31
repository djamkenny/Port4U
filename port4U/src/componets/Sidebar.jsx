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

            {/* General section */}
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>  
                <div className="logo">Port4U</div>  
                <div className="section">  
                    <h3>General</h3>  
                    <ul>  
                        <a href="/overview"><li>Overview Dashboard</li></a>
                        <a href="/videotube"><li>VideoTube</li></a>
                        <a href="/community"><li>Community</li></a>
                        <a href="/recruitment"><li>Recruitment</li></a>
                        <a href="/project"><li>Projects and Innovations</li></a>
                        <a href="/mentorship"><li>Mentorship Programs</li></a>
                        <a href="/hackathon"><li>Hackathons</li></a>
                        
                    </ul>  
                </div> 

                {/*My space section  */}
                <div className="section">  
                    <h3>My Space</h3>  
                    <ul>  
                        <a href="/dashboard"><li>Dashboard</li> </a>
                        <a href="/portfolio"><li>Portfolio</li> </a>
                        <a href="/mini-community"><li>Mini Community</li>  </a>
                        <a href="/inbox"><li>Inbox</li>  </a>
                        <a href="/manage-Account"><li>Manage Account</li>  </a>
                    </ul>  
                </div> 

                {/*support section  */}
                <div className="section">  
                    <h3>Supports</h3>  
                    <ul>  
                        <a href="/customer-Service"><li>Customer Service</li> </a>
                        <a href="/settings"><li>Settings</li> </a>
                        <a href="/chat-bot"><li>Chat with AI bot</li> </a>  
                    </ul>  
                </div>  

                {/* user managements */}
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