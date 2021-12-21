
import { Button } from '@mui/material';
import React from 'react';
import '../Home.css';

function home(props) {
    return (
        <div>

            <div class='row head'>
                <div className="col-9 headtext">
                    <p>Reading</p>
                </div>
                <div className="col-3 headright">
                    <button class="button headbtn">Login</button>
                </div>
            </div>

            <div className="div">

                <div className="row imgcontainer">

                    <div className="col-4 imgsec">
                        <img src="/images/imgcontaner1.png" alt="img1" />   
                    </div>

                    <div className="col-4 imgsec">
                        <img src="/images/imgcontaner2.png" alt="img2" />
                    
                    </div>

                    <div className="col-4 imgsec">
                        <img src="/images/imgcontaner3.png" alt="img3" />
                        
                    </div>

                </div>

            

                <div className="row imgtext">
                    <div className="col-4">
                        <h2>Books</h2>
                    </div>
                    <div className="col-4">
                        <h2>Videos</h2>
                    </div>
                    <div className="col-4">
                        <h2>Games</h2>
                    </div>
                </div>

            </div>



            <div className="row steps topimg">

                <div className="div">
                    <div className="col-3 stepimg">
                        <img src="/images/stepsimg.png" alt="begingame" />
                    </div>

                    <div className="col-9 steptext">
                        <h1 className="stepstitle">Learning Path</h1>
                        <h3>Do you wanna understand a learing path and win a trophy by playing a race game?</h3>
                        <h3>First, Let's start together from seeing the rules of game!</h3>
                        <button className="stepbtn"><a href="#step1"><span>Ready Set Go!</span></a></button>
                    </div>
                </div>

            </div>


           
            <div className="row steps step1">
                <a id="step1">
                <div className="div">
                    <div className="col-3 stepimg">
                        <img src="/images/stepone.png" alt="begingame" />
                    </div>

                    <div className="col-9 steptext">
                        <h2>Level 1</h2>
                        <h3>In this level, First you have to register yourself on the website and give the assessment test.</h3>
                         <h3>Then, you are ready to go to the next level.</h3>
                        <button className="stepbtn"><a href="#step2"><span>Next...</span></a></button>
                    </div>
                </div>
                </a>

            </div>

            <div className="row steps step2">
                <a id="step2">
                    <div className="div">

                        <div className="col-3 stepimg">
                            <img src="/images/stepthree.png" alt="begingame" />
                        </div>

                        <div className="col-9 steptext">
                            <h2>Level 2</h2>
                            <h3>
                                Here, you have to watch videos, read books to reach near to the finish line.
                            </h3>
                            <button className="stepbtn"><a href="#step3"><span>Next...</span></a></button>
                        </div>

                    </div>
                </a>
            </div>


            <div className="row steps step3">
                <a id = "step3">
                <div className="div">

                    <div className="col-3 stepimg">
                        <img src="/images/finalstep.png" alt="begingame" />
                    </div>

                    <div className="col-9 steptext">
                    <h2>Level 3</h2>
                        <h3>
                            In the final level, you are too close to finish line. You have to clear a test to win a Trophy.
                        </h3>
                        <button className="stepbtn"><a href="#"><span>Let's Begin the Race</span></a></button>
                    </div>

                </div>
                </a>

            </div>

        

            

            </div>


    
    );
}

export default home;