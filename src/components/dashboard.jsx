import React from 'react';
import image1 from '../assests/image-1.png';

import Timeline from './timeline';
import Content from './content';

const dashboardContainer = {
    width: "90%",
    // height: "100%",
    border: "2px solid #E5E5E5",
    margin: "auto",
    marginTop: "0px"
    // position: "relative"
};

const navBar = {
    width: "100%",
    height: "50px",
    border: "2px solid black",
    marginTop: "40px"
}

const logo = {
    display: "inline-block",
}

const profile = {
    display: "inline-block",
    position: "relative",
    left: "80%",
    height: "100%"
}

// const timeline = {
//     width: "30%",
//     height: "500px",
//     border: "2px solid blue",
//     display: "inline-block",
// }

function Dashboard(props) {
    return (
        <div style={{backgroundColor: "#E5E5E5", height: "100vh"}}>
            <div style={dashboardContainer}>
                <div style={navBar}>
                    <div style={logo}>
                        <h1 style={{margin:"0px"}}>Reading</h1>
                    </div>

                    <div style={profile}>
                        <h6 style={{display:"inline-block", margin:"0px", marginRight:"10px"}}>Jane Doe</h6>
                        <img style={{display:"inline-block", borderRadius: "50%", margin:"auto", verticalAlign: "middle"}} src={image1} width="30px"></img>
                    </div>



                </div>
                <div style={{height: "auto"}}>
                <Timeline/>
                <Content/>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;