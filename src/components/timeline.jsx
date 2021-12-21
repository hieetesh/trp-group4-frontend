import React from 'react';

const timelineContainer = {
    width: "20%",
    height: "500px",
    // border: "2px solid black",
    display: "inline-block",
    marginTop: "20px",
}

const tabStyle = {
    width: "100%",
    height: "40px",
    border: "2px solid grey",
    margin: "20px 0px",
    // marginLeft: "20px"
}

function Timeline(props) {
    return (
        <div style={timelineContainer}>
            <div style={tabStyle}>
                <h3 style={{margin:"0px", display:"inline-block", height:"100%", marginTop:"8px", marginLeft:"10px"}}>Week - 1</h3>
                <h3 style={{margin:"8px", display:"inline-block", float:"right"}}>&#10148;</h3>
            </div>
            <div style={tabStyle}>
                <h3 style={{margin:"0px", display:"inline-block", height:"100%", marginTop:"8px", marginLeft:"10px"}}>Week - 2</h3>
                <h3 style={{margin:"8px", display:"inline-block", float:"right"}}>&#10148;</h3>
            </div>
            <div style={tabStyle}>
                <h3 style={{margin:"0px", display:"inline-block", height:"100%", marginTop:"8px", marginLeft:"10px"}}>Week - 3</h3>
                <h3 style={{margin:"8px", display:"inline-block", float:"right"}}>&#10148;</h3>
            </div>
            <div style={tabStyle}>
                <h3 style={{margin:"0px", display:"inline-block", height:"100%", marginTop:"8px", marginLeft:"10px"}}>Week - 4</h3>
                <h3 style={{margin:"8px", display:"inline-block", float:"right"}}>&#10148;</h3>
            </div>
            <div style={tabStyle}>
                <h3 style={{margin:"0px", display:"inline-block", height:"100%", marginTop:"8px", marginLeft:"10px"}}>Week - 5</h3>
                <h3 style={{margin:"8px", display:"inline-block", float:"right"}}>&#10148;</h3>
            </div>
            <div style={tabStyle}>
                <h3 style={{margin:"0px", display:"inline-block", height:"100%", marginTop:"8px", marginLeft:"10px"}}>Week - 6</h3>
                <h3 style={{margin:"8px", display:"inline-block", float:"right"}}>&#10148;</h3>
            </div>
            <div style={tabStyle}>
                <h3 style={{margin:"0px", display:"inline-block", height:"100%", marginTop:"8px", marginLeft:"10px"}}>Week - 7</h3>
                <h3 style={{margin:"8px", display:"inline-block", float:"right"}}>&#10148;</h3>
            </div>
        </div>
    );
}

export default Timeline;