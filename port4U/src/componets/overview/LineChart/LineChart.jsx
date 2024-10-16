import React from 'react';  
import { Line } from 'react-chartjs-2';  
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';  
import './LineChart.css'

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);  


const LineChart = () => {  
  const data = {  
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],  
    datasets: [  
      {  
        label: 'Employment rate',  
        data: [100, 200, 300, 400, 300, 500, 400, 450, 500],  
        borderColor: 'rgba(0, 235, 0, 1)', // Green  
        backgroundColor: 'rgba(0, 235, 0, 0.2)',  
        fill: true,  
        tension: 0.4,  
      },  
      {  
        label: 'Connections',  
        data: [150, 250, 350, 300, 400, 450, 500, 400, 450],  
        borderColor: 'rgba(0, 0, 255, 1)', // Blue  
        backgroundColor: 'rgba(0, 0, 255, 0.2)',  
        fill: true,  
        tension: 0.4,  
      },  
    ],  
  };  

  const options = {  
    responsive: true,  
    plugins: {  
      legend: {  
        position: 'top',  
      },  
    },  
    scales: {  
      y: {  
        beginAtZero: true,  
        ticks: {  
          callback: (value) => `$${value}`, // Format y-axis labels  
        },  
      },  
    },  
  };  

  return (  
    <div className='line-chart' style={{ backgroundColor: '#1e1e2f', padding: '20px', borderRadius: '8px' }}>  
      <h2 style={{ color: '#fff', margin: '3' }}>Insight</h2>  
      <Line data={data} options={options} />  
      <div style={{ color: '#fff', marginTop: '10px' }}>  
        {/* <span style={{ color: 'rgba(0, 255, 0, 1)', marginRight: '10px' }}>● Employment rate</span>   */}
        {/* <span style={{ color: 'rgba(0, 0, 255, 1)' }}>● Connections</span>   */}
      </div>  
    </div>  
  );  
};  

export default LineChart;