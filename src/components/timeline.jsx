import React, { useEffect, useState }  from 'react';

const timelineContainer = {
    width: "20%",
    height: "500px",
    // border: "2px solid black",
    display: "inline-block",
    marginTop: "20px",
    marginLeft: "20px"
}

const tabStyle = {
    width: "100%",
    height: "40px",
    border: "2px solid #F05454",
    margin: "20px 0px",
    cursor: "pointer",
    backgroundColor: "#F05454",
    color: "white",
    borderRadius: "25px"
    // marginLeft: "20px"
}

const hightlightTabStyle = {
    width: "100%",
    height: "40px",
    border: "2px solid green",
    margin: "20px 0px",
    cursor: "pointer",
    backgroundColor: "green",
    color: "white",
    borderRadius: "25px"
}

const testStyle = {
    width: "100%",
    height: "40px",
    border: "2px solid yellow",
    margin: "20px 0px",
    cursor: "pointer",
    backgroundColor: "yellow",
    // marginLeft: "20px"
}

function Timeline(props) {

    const [weekStyle, setWeekStyle] = useState("week1");

    const handleTabClick = (data) => {
        props.sound.stop();
        setWeekStyle(data);
        props.setWeek(data);
    }

    return (
        <div style={timelineContainer}>
            <div style={weekStyle == "week1" ? hightlightTabStyle : tabStyle} onClick={()=>handleTabClick("week1")}>
                <h3 className={"highlight"} style={{margin:"0px", display:"inline-block", height:"100%", marginTop:"8px", marginLeft:"10px"}}>Week - 1</h3>
                <h3 style={{margin:"8px", display:"inline-block", float:"right"}}>&#10148;</h3>
            </div>
            <div style={weekStyle == "week2" ? hightlightTabStyle : tabStyle} onClick={()=>handleTabClick("week2")}>
                <h3 style={{margin:"0px", display:"inline-block", height:"100%", marginTop:"8px", marginLeft:"10px"}}>Week - 2</h3>
                <h3 style={{margin:"8px", display:"inline-block", float:"right"}}>&#10148;</h3>
            </div>
            <div style={weekStyle == "week3" ? hightlightTabStyle : tabStyle} onClick={()=>handleTabClick("week3")}>
                <h3 style={{margin:"0px", display:"inline-block", height:"100%", marginTop:"8px", marginLeft:"10px"}}>Week - 3</h3>
                <h3 style={{margin:"8px", display:"inline-block", float:"right"}}>&#10148;</h3>
            </div>
            <div style={weekStyle == "week4" ? hightlightTabStyle : tabStyle} onClick={()=>handleTabClick("week4")}>
                <h3 style={{margin:"0px", display:"inline-block", height:"100%", marginTop:"8px", marginLeft:"10px"}}>Week - 4</h3>
                <h3 style={{margin:"8px", display:"inline-block", float:"right"}}>&#10148;</h3>
            </div>
            <div style={weekStyle == "week5" ? hightlightTabStyle : tabStyle} onClick={()=>handleTabClick("week5")}>
                <h3 style={{margin:"0px", display:"inline-block", height:"100%", marginTop:"8px", marginLeft:"10px"}}>Week - 5</h3>
                <h3 style={{margin:"8px", display:"inline-block", float:"right"}}>&#10148;</h3>
            </div>
            <div style={weekStyle == "week6" ? hightlightTabStyle : tabStyle} onClick={()=>handleTabClick("week6")}>
                <h3 style={{margin:"0px", display:"inline-block", height:"100%", marginTop:"8px", marginLeft:"10px"}}>Week - 6</h3>
                <h3 style={{margin:"8px", display:"inline-block", float:"right"}}>&#10148;</h3>
            </div>
            <div style={weekStyle == "week7" ? hightlightTabStyle : tabStyle} onClick={()=>handleTabClick("week7")}>
                <h3 style={{margin:"0px", display:"inline-block", height:"100%", marginTop:"8px", marginLeft:"10px"}}>Week - 7</h3>
                <h3 style={{margin:"8px", display:"inline-block", float:"right"}}>&#10148;</h3>
            </div>
            <div style={testStyle} onClick={()=>handleTabClick("test")}>
                <h3 style={{margin:"0px", display:"inline-block", height:"100%", marginTop:"8px", marginLeft:"10px"}}>Test</h3>
                <h3 style={{margin:"8px", display:"inline-block", float:"right"}}>&#10148;</h3>
            </div>
        </div>
    );
}

export default Timeline;