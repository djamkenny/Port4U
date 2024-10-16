import React from 'react';  
import './TopProject.css'; // Import your CSS file for styling  

const TopProjects = () => {  
  const projects = [  
    { id: 1, name: 'Ecommerce', contributor: 'Josh', donation: '$200.00' },  
    { id: 2, name: 'Tictak toe game', contributor: 'Elvin', donation: '$170.00' },  
    { id: 3, name: 'Hippop Game', contributor: 'Rubby Kai', donation: '$150.00' },  
    { id: 4, name: 'Project A', contributor: 'Jasper', donation: '$125.00' },  
    { id: 5, name: 'Project B', contributor: 'Sedem Amenyo', donation: '$100.00' },  
    { id: 6, name: 'Car Innovations', contributor: 'Edwin Amon', donation: '$90.00' },  
  ];  

  

  return (  
    <div className="top-projects">  
      <h2>Top Projects and Innovations</h2>  
      <table>  
        <thead>  
          <tr>  
            <th>Projects/Innovations</th>  
            <th>Name</th>  
            <th>Donation</th>  
          </tr>  
        </thead>  
        <tbody>  
          {projects.map((project) => (  
            <tr key={project.id}>  
              <td>{project.id} {project.name}</td>  
              <td>{project.contributor}</td>  
              <td>{project.donation}</td>  
            </tr>  
          ))}  
        </tbody>  
      </table>  
    </div>  
  );  
};  

export default TopProjects;