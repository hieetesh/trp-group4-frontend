import React, { useEffect, useState } from 'react';
import image1 from '../assests/image-1.png';
import dollar from '../assests/dollar.jpg'
import Timeline from './timeline';
import Content from './content';
import { Howl } from 'howler';
import bgSound from '../assests/quiz.mp3';



const dashboardContainer = {
    width: "100%",
    // height: "100%",
    border: "2px solid #E5E5E5",
    margin: "auto",
    marginTop: "0px"
    // position: "relative"
};

const navBar = {
    width: "100%",
    height: "60px",
    border: "2px solid white",
    marginTop: "0px",
    backgroundColor: "white"
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

function Dashboard(props) {

    const noise = new Audio();
    noise.src = bgSound;
    noise.loop = true;
    noise.load();

    var sound = new Howl({
        src: [bgSound],
        html5: true,
        loop: true
    });

    const [week, setWeek] = useState("week1");
    const [musicLoad, setMusicLoad] = useState("");
    const [rewards, setRewards] = useState(0);

    const [progress, setProgress] = useState({
        "week1": {
            "book":25,
            "word":25,
            "lesson":25
        },
        "week2": {
            "book":100,
            "word":75,
            "lesson":50
        },
        "week3": {
            "book":100,
            "word":75,
            "lesson":50
        },
        "week4": {
            "book":100,
            "word":75,
            "lesson":50
        },
        "week5": {
            "book":100,
            "word":75,
            "lesson":50
        },
        "week6": {
            "book":100,
            "word":75,
            "lesson":50
        },
    })
    useEffect(()=>{
        console.log("play sound")
        sound.play();

        // return () => sound.stop();
    });



    return (
        <div style={{backgroundColor: "#E5E5E5", height: "100vh"}}>
            <div style={dashboardContainer}>
                <div style={navBar}>
                    <div style={logo}>
                        {/* <h1 style={{margin:"0px", marginTop:"15px", verticalAlign: "middle", color:"#F05454"}}>Reading</h1> */}
                        <img style={{display:"inline-block", marginLeft:"20px"}} src="/images/logohome.png" width="60px" alt="logo" />
                    </div>

                    <div style={profile}>
                        <img style={{display:"inline-block", borderRadius: "50%", margin:"auto", verticalAlign: "middle",position:"relative", right:"60%", bottom: "50%"}} src={dollar} width="30px"></img>
                        <h4 style={{display:"inline-block", margin:"0px", marginLeft:"10px", marginRight:"10px",position:"relative", right:"60%", bottom: "50%"}}>{rewards}</h4>
                        <h5 style={{display:"inline-block", margin:"0px", marginRight:"10px",position:"relative", right:"20%", bottom: "50%"}}>Jane Doe</h5>
                        <img style={{display:"inline-block", borderRadius: "50%", margin:"auto", verticalAlign: "middle",position:"relative", right:"20%", bottom: "50%"}} src={image1} width="30px"></img>
                    </div>
                </div>
                <div style={{height: "auto"}}>
                <Timeline
                    setWeek={(value)=>setWeek(value)}
                    sound={sound}
                    progress={progress}
                    setProgress={(value)=>setProgress(value)}
                />
                <Content
                    week={week}
                    rewards={rewards}
                    setRewards={(value)=>setRewards(value)}
                    progress={progress}
                    setProgress={(value)=>setProgress(value)}
                />
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;