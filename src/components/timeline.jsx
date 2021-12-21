import React, { useEffect, useState }  from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircularProgress from '@mui/material/CircularProgress';


import book from '../assests/content-book.svg';
import computer from '../assests/computer.svg';
import lesson from '../assests/lesson.svg';

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

const accTabStyle = {
    width: "100%",
    border: "2px solid #F05454",
    margin: "20px 0px",
    cursor: "pointer",
    backgroundColor: "#F05454",
    color: "white",
    borderRadius: "25px"
    // marginLeft: "20px"
}

const accHighlightTabStyle = {
    width: "100%",
    border: "2px solid green",
    margin: "20px 0px",
    cursor: "pointer",
    backgroundColor: "green",
    color: "white",
    borderRadius: "25px"
    // marginLeft: "20px"
}

const accTestTabStyle = {
    width: "100%",
    border: "2px solid yellow",
    margin: "20px 0px",
    cursor: "pointer",
    backgroundColor: "yellow",
    color: "black",
    borderRadius: "25px"
    // marginLeft: "20px"
}

const typographyStyle = {
    fontSize : "25px",
    fontFamily: "fantasy",
    marginTop: "8px"
}

const subContainers = {
    // border: "2px solid white",
    width: "100%",
    height: "40px",
    marginBottom: "10px",
}

const imgStyle = {
    width: "auto",
    height: "100%",
    float: "left",
    marginRight: "8px",
    display: "inline-block",
}

const subHeadingStyle = {
    fontSize: "15px",
    margin: "0px",
    marginTop: "4px",
    display: "inline-block",
}

const spinnerStyle = {
    display: "inline-block",
    width: "30px",
    height: "30px",
    float: "right",
    color: "white",
    margin: "3px 5px",
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
            {/* <div style={weekStyle == "week1" ? hightlightTabStyle : tabStyle} onClick={()=>handleTabClick("week1")}>
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
            </div> */}
            <div>
                <Accordion style={weekStyle == "week1" ? accHighlightTabStyle : accTabStyle} onClick={()=>handleTabClick("week1")}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography style={typographyStyle}><b>Week - 1</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <div style={subContainers}>
                            <img src={book} style={imgStyle}></img>
                            <h3 style={subHeadingStyle}>At the beach</h3>
                            <CircularProgress style={spinnerStyle} variant="determinate" value={props.progress.week1.book} />
                        </div>
                        <div style={subContainers}>
                            <img src={computer} style={imgStyle}></img>
                            <h3 style={subHeadingStyle}>Sight word bingo</h3>
                            <CircularProgress style={spinnerStyle} variant="determinate" value={props.progress.week1.word} />
                        </div>
                        <div style={subContainers}>
                            <img src={lesson} style={imgStyle}></img>
                            <h3 style={subHeadingStyle}>Lesson 1 Letter Sound</h3>
                            <CircularProgress style={spinnerStyle} variant="determinate" value={props.progress.week1.lesson} />
                        </div>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={weekStyle == "week2" ? accHighlightTabStyle : accTabStyle} onClick={()=>handleTabClick("week2")}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography style={typographyStyle}><b>Week - 2</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <div style={subContainers}>
                            <img src={book} style={imgStyle}></img>
                            <h3 style={subHeadingStyle}>In the tube</h3>
                            <CircularProgress style={spinnerStyle} variant="determinate" value={100} />
                        </div>
                        <div style={subContainers}>
                            <img src={computer} style={imgStyle}></img>
                            <h3 style={subHeadingStyle}>Sight word ckubz</h3>
                            <CircularProgress style={spinnerStyle} variant="determinate" value={75} />
                        </div>
                        <div style={subContainers}>
                            <img src={lesson} style={imgStyle}></img>
                            <h3 style={subHeadingStyle}>Lesson 2 Letter Sound</h3>
                            <CircularProgress style={spinnerStyle} variant="determinate" value={50} />
                        </div>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={weekStyle == "week3" ? accHighlightTabStyle : accTabStyle} onClick={()=>handleTabClick("week3")}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography style={typographyStyle}><b>Week - 3</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <div style={subContainers}>
                            <img src={book} style={imgStyle}></img>
                            <h3 style={subHeadingStyle}>Tasha goes to school</h3>
                            <CircularProgress style={spinnerStyle} variant="determinate" value={100} />
                        </div>
                        <div style={subContainers}>
                            <img src={computer} style={imgStyle}></img>
                            <h3 style={subHeadingStyle}>Sight word flhr</h3>
                            <CircularProgress style={spinnerStyle} variant="determinate" value={75} />
                        </div>
                        <div style={subContainers}>
                            <img src={lesson} style={imgStyle}></img>
                            <h3 style={subHeadingStyle}>Lesson 3 Letter Sound</h3>
                            <CircularProgress style={spinnerStyle} variant="determinate" value={50} />
                        </div>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={weekStyle == "week4" ? accHighlightTabStyle : accTabStyle} onClick={()=>handleTabClick("week4")}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography style={typographyStyle}><b>Week - 4</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <div style={subContainers}>
                            <img src={book} style={imgStyle}></img>
                            <h3 style={subHeadingStyle}>To the moon</h3>
                            <CircularProgress style={spinnerStyle} variant="determinate" value={100} />
                        </div>
                        <div style={subContainers}>
                            <img src={computer} style={imgStyle}></img>
                            <h3 style={subHeadingStyle}>Sight word jvwx</h3>
                            <CircularProgress style={spinnerStyle} variant="determinate" value={75} />
                        </div>
                        <div style={subContainers}>
                            <img src={lesson} style={imgStyle}></img>
                            <h3 style={subHeadingStyle}>Lesson 4 Letter Sound</h3>
                            <CircularProgress style={spinnerStyle} variant="determinate" value={50} />
                        </div>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={weekStyle == "week5" ? accHighlightTabStyle : accTabStyle} onClick={()=>handleTabClick("week5")}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography style={typographyStyle}><b>Week - 5</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <div style={subContainers}>
                            <img src={book} style={imgStyle}></img>
                            <h3 style={subHeadingStyle}>It looks like A</h3>
                            <CircularProgress style={spinnerStyle} variant="determinate" value={100} />
                        </div>
                        <div style={subContainers}>
                            <img src={computer} style={imgStyle}></img>
                            <h3 style={subHeadingStyle}>Sight word</h3>
                            <CircularProgress style={spinnerStyle} variant="determinate" value={75} />
                        </div>
                        <div style={subContainers}>
                            <img src={lesson} style={imgStyle}></img>
                            <h3 style={subHeadingStyle}>Lesson 5 Letter Sound</h3>
                            <CircularProgress style={spinnerStyle} variant="determinate" value={50} />
                        </div>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={weekStyle == "week6" ? accHighlightTabStyle : accTabStyle} onClick={()=>handleTabClick("week6")}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography style={typographyStyle}><b>Week - 6</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <div style={subContainers}>
                            <img src={book} style={imgStyle}></img>
                            <h3 style={subHeadingStyle}>Seth's Pet</h3>
                            <CircularProgress style={spinnerStyle} variant="determinate" value={100} />
                        </div>
                        <div style={subContainers}>
                            <img src={computer} style={imgStyle}></img>
                            <h3 style={subHeadingStyle}>Sight word pingo</h3>
                            <CircularProgress style={spinnerStyle} variant="determinate" value={75} />
                        </div>
                        <div style={subContainers}>
                            <img src={lesson} style={imgStyle}></img>
                            <h3 style={subHeadingStyle}>Lesson 6 Letter Sound</h3>
                            <CircularProgress style={spinnerStyle} variant="determinate" value={50} />
                        </div>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={accTestTabStyle} onClick={()=>handleTabClick("week7")}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography style={typographyStyle}><b>Test</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>

                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}

export default Timeline;