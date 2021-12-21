import React from 'react';
import "../login.css"

function login(props) {
    const style1={
        marginLeft: 220,
        marginRight: 220
    };

    return (
        <div style={style1}>
            <h3 className="heading"> Reading </h3>

            <button className="back" onClick={()=>{window.location="/home"}}>Go Back</button>
            <div className="loginbox">
            <label className="lbllogin">Login</label>
            <br/>

            <label className="frmlbl">Username</label>
            <img className="icon" src="/images/single_user.svg" />
            <input type="text" className="frmtxt" />

            <br/>
            <label className="frmlbl">Password</label>
            <img className="icon" src="/images/password.svg" />
            <input type="password" className="frmtxt" />

            <a href="" className="lblForgot">Forgot Password?</a>
            <br/>

            <button className="login" onClick={()=>{window.location="/dashboard"}}>Login</button>
            <br/>
            <label className="lblsignup">Haven't you Sign Up?</label>
            <span className="show"><a className="lblsignuplink" href="/signup">Sign Up</a></span>
            </div>
        </div>
    );
}

export default login;