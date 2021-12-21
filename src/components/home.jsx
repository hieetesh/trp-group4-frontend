
import { Button } from '@mui/material';
import React from 'react';
import '../Home.css';



function home(props) {

    const handleClickCollapse = () => {
        var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
    }

    return (
        <div>

            <div class='row head'>
                <div className="col-9 headtext">
                <img src="/images/logohome.png" alt="logo" />
                </div>
                <div className="col-3 headright">
                    <button class="button headbtn" onClick={()=>{window.location="/login"}}>Login</button>
                </div>
            </div>

            <div className="row">
                <div className="col-12 headhomesec">
                <h3>"Today a reader, tomorrow a leader" - Margaret Fuller</h3>
                <button class="button headhomebtn" onClick={()=>{window.location="/application"}}>Register Now</button>
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
                    <div className="col-4 imgdesc">
                        <h2>Books</h2>
                        <button type="button" class="collapsible" onClick={()=>  {handleClickCollapse()}}>Inspire a lifetime of reading and nurture a love for learning with our wide selection of books.</button>
                        <div class="content">
                            <p>At the beach</p>
                            <p>In the Tub</p>
                            <p>Tasha goes to school</p>
                            <p>To the Moon</p>
                        </div>
                    </div>
                    <div className="col-4 imgdesc">
                        <h2>Videos</h2>
                        <button type="button" class="collapsible" onClick={()=>  {handleClickCollapse()}}>Learn while having fun with our exhaustive library of videos.</button>
                        <div class="content">
                        <p>lesson-1-letter-sound</p>
                        <p>lesson-2-letter-sound</p>
                        <p>sight-words-lesson-1</p>
                        <p>sound-words-1</p>
                        <p>sound-words-2</p>
                        </div>
                    </div>
                    <div className="col-4 imgdesc">
                        <h2>Games</h2>
                        <button type="button" class="collapsible" onClick={()=>  {handleClickCollapse()}}>Delve into the world of fun and adventure while learning with our interactive games..</button>
                        <div class="content">

                            <p>sight-word-bingo</p>
                            <p>sentence-strip</p>
                            <p>sentence-strips-sight</p>
                            <p>photophonics-mastdesh</p>
                            <p>missing-letter-picture-cards</p>
                        </div>
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
                        <button className="stepbtn"><a href="./login.jsx"><span>Let's Begin the Race</span></a></button>
                    </div>

                </div>
                </a>

            </div>

            <div className="row footertext">
            <p>&copy; 2021 | Team 4 | All Rights Reserved</p>
            </div>





            </div>




    );

}


export default home;