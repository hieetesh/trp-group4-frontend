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
    height: "600px",
    border: "10px solid black",
    backgroundColor: "white",
    borderRadius: "25px",
    marginLeft: "30px",
    marginTop: "20px",
    marginRight: "10px",
    float:"right",
}

const iframeStyle = {
    // float:"left",
    border: "none",
    width:"100%",
    height: "100%"
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

function Content(props) {
    const weekDay = props.week;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
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
                <h2 style={{color:"black"}}>&#127881; Congratulations</h2>
                </DialogTitle>
                <DialogContent>
                <DialogContentText>
                    <h3 style={{color:"black"}}>You have earned rewards for completing this module!!!</h3>
                </DialogContentText>
                </DialogContent>
                <DialogActions>

                <Button style={{color:"black"}} onClick={handleClose}>Done</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Content;