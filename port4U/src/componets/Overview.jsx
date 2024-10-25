import LineChart from "./overview/LineChart/LineChart";
import TopProjects from "./overview/TopProjects.css/TopProjects";
import './Overview.css'


const Overview = () => {
    return (
        <div className="grid-container">
            <TopProjects></TopProjects>
            <LineChart className="" ></LineChart>
            {/* <TopProjects></TopProjects> */}
            
        </div>
        
        
    );
}

export default Overview