import React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }

const contentContainer = {
    display: "inline-block",
    width: "75%",
    height: "710px",
    border: "10px solid black",
    backgroundColor: "white",
    borderRadius: "25px",
    marginLeft: "30px",
    marginTop: "5px",
    marginRight: "10px",
    float:"right",
}

const iframeStyle = {
    // float:"left",
    border: "none",
    width:"100%",
    height: "700px"
}

const buttonContainer = {
    display: "block",
    // border: "2px solid black",
    height: "60px",
    marginTop: "10px",
}

const playButtonStyle = {

    width: "100px",
    height: "40px",
    border: "2px solid #F05454",
    backgroundColor: "#F05454",
    color: "white",
    float: "left",
    borderRadius: "25px",
    cursor: "pointer",
}

const completeButtonStyle = {

    // margin: "10px",
    width: "130px",
    height: "40px",
    border: "2px solid #F05454",
    backgroundColor: "#F05454",
    color: "white",
    float: "right",
    borderRadius: "25px",
    cursor: "pointer",
}

const selectBookToRead = (weekDay) => {
    switch(weekDay){
        case "week1":
            return "http://atb.old.readingpartnership.com/";
        case "week2":
            return "http://atb.old.readingpartnership.com/inTheTub/";
        case "week3":
            return "http://atb.old.readingpartnership.com/tashaGoesToSchool/";
        case "week4":
            return "http://atb.old.readingpartnership.com/toTheMoon/";
        case "week5":
            return "http://atb.old.readingpartnership.com/itLooksLikeA/";
        case "week6":
            return "http://atb.old.readingpartnership.com/sethsPet/";
        case "week7":
            return "http://atb.old.readingpartnership.com/whoIsHere/";
        default:
            return "http://atb.old.readingpartnership.com/";
    }

}

// const resizeIframe = (obj) => {
//     console.log("resizeIframe", obj);
//     //obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
//   }

function Content(props) {
    const weekDay = props.week;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        props.setRewards(props.rewards+100);
        let progress = props.progress;
        progress['week1']['book'] = 100;
        progress['week1']['word'] = 100;
        progress['week1']['lesson'] = 100;
        props.setProgress(progress);
      };

      const handleClose = () => {
        setOpen(false);
      };
    const link = selectBookToRead(weekDay);

    return (
        <div style={contentContainer}>
            <iframe style={iframeStyle} src={link}></iframe>
            <div style={buttonContainer}>
                <button style={playButtonStyle}>Play again</button>
                <button style={completeButtonStyle} onClick={handleClickOpen}>Mark as complete</button>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                <h2 style={{color:"black",fontSize:"50px", fontFamily:"fantasy"}}>&#127881; Congratulations &#128522;	</h2>
                </DialogTitle>
                <DialogContent>
                <DialogContentText>
                    <h3 style={{color:"black", fontFamily:"fantasy"}}>Huray!! &#129321; You have earned rewards for completing this module!!!</h3>
                </DialogContentText>
                </DialogContent>
                <DialogActions>

                <Button style={{color:"black"}} onClick={handleClose}><b>Done</b></Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Content;