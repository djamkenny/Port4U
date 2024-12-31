import React, { useState, useEffect } from 'react';  
import '../PagesCSS/Blank.css'
import Message from './Message';
import './Chat.css'; 

const Chat = () => {  
  const [messages, setMessages] = useState([]);  
  const [input, setInput] = useState(''); 


  // Load messages from local storage  
  useEffect(() => {  
      const savedMessages = JSON.parse(localStorage.getItem('messages'));  
      if (savedMessages) {  
          setMessages(savedMessages);  
      }  
  }, []);  

  // Save messages to local storage  
  useEffect(() => {  
      localStorage.setItem('messages', JSON.stringify(messages));  
  }, [messages]);  

  const handleSend = (e) => {  
      e.preventDefault();  
      if (input) {  
          setMessages([...messages, { text: input, id: Date.now() }]);  
          setInput('');  
      }  
  }; 
  return (  
    <div className="chat-container">  
        <div className="message-list">  
            {messages.map((msg) => (  
                <Message key={msg.id} text={msg.text} />  
            ))}  
        </div>  
        <form className="message-form" onSubmit={handleSend}>  
            <input  
                type="text"  
                value={input}  
                onChange={(e) => setInput(e.target.value)}  
                placeholder="Type your message..."  
                required  
            />  
            <button type="submit">Send</button>  
        </form>  
    </div>   
  ); 
  
};  

export default Chat; 