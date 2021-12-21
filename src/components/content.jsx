import React from 'react';

const contentContainer = {
    display: "inline-block",
    width: "75%",
    height: "600px",
    border: "2px solid grey",
    marginLeft: "30px",
    marginTop: "20px",
    float:"right",
}

const iframeStyle = {
    // float:"left",
    border: "none",
    width:"100%",
    height: "100%"
}

function Content(props) {
    return (
        <div style={contentContainer}>
            <iframe style={iframeStyle} FRAMEBORDER="no" BORDER="0" src="http://atb.old.readingpartnership.com/"></iframe>
            <button>Play again</button>
            <button style={{float: "right"}}>Mark as complete</button>
        </div>
    );
}

export default Content;