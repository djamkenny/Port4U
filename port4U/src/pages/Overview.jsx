import LineChart from "../componets/overview/LineChart/LineChart";
import TopProjects from "../componets/overview/TopProjects.css/TopProjects";
import './PagesCSS/Overview.css'


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