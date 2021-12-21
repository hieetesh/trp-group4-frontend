import * as React from 'react';
import "../application.css"

const style1={
    marginLeft: 220,
    marginRight: 220
};

function Application(props) {

    return (
        <div style={style1}>
            <h3 className="heading"> Reading </h3>

            <button className="back">Go Back</button>
            
            <div className="registerbox">
            <label className="lblmainsignup">Sign Up</label>
                <table>
                    <tr><td colspan="2"></td></tr>
                    <tr>
                        <td>Personal Infromation: </td>
                        <td>
                            <table>
                                <tr>
                                    <td>
                                        <div className="frmcol">
                                            <label className="frmlbl">First Name</label>
                                            <img className="icon" src="/images/single_user.svg" />
                                            <input type="text" className="frmtxt" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="frmcol">
                                            <label className="frmlbl">Last Name</label>
                                            <img className="icon" src="/images/single_user.svg" />
                                            <input type="text" className="frmtxt" />
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                        <table>
                                <tr>
                                    <td>
                                        <div className="frmcol">
                                            <label className="frmlbl">Email Address</label>
                                            <img className="icon" src="/images/mail.svg" />
                                            <input type="email" className="frmtxt" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="frmcol">
                                            <label className="frmlbl">Date of Birth</label>
                                            <img className="icon" src="/images/date.svg" />
                                            <input type="date" className="frmtxt size-225" />
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                        <div className="frmcol">
                            <label className="frmlbl">Address</label>
                            <img className="icon" src="/images/home.svg" />
                            <input type="email" className="frmtxt size-500" />
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                        <table>
                            <tr>
                                <td>
                                    <div className="frmcol">
                                        <label className="frmlbl">City</label>
                                        <img className="icon" src="/images/home.svg" />
                                        <input type="text" className="frmtxt" />
                                    </div>
                                </td>
                                <td>
                                    <div className="frmcol">
                                        <label className="frmlbl">Province</label>
                                        <img className="icon" src="/images/home.svg" />
                                        <input type="text" className="frmtxt" />
                                    </div>
                                </td>
                            </tr>
                        </table>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                        <table>
                            <tr>
                                <td>
                                    <div className="frmcol">
                                        <label className="frmlbl">Postal Code</label>
                                        <img className="icon" src="/images/home.svg" />
                                        <input type="text" className="frmtxt" />
                                    </div>
                                </td>
                                <td>
                                    <div className="frmcol">
                                        <label className="frmlbl">Country</label>
                                        <img className="icon" src="/images/map.svg" />
                                        <input type="text" className="frmtxt" />
                                    </div>
                                </td>
                            </tr>
                        </table>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                        <div className="frmcol">
                            <label className="frmlbl">Number of children</label>
                            <img className="icon" src="/images/single_user.svg" />
                            <input type="text" className="frmtxt size-500" />
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button className="signup">Sign Up</button>
                        </td>
                    </tr>
                </table>
            </div>
{/* 
        <div style={{backgroundColor: '#fff9c4', width:"100%", height:"auto",// border: "2px solid black",padding: "1rem",
        textAlign: "center"}}>
            <img style={style1} src='images/banner.png' width="800" height="170"></img>
            <form>
                <br/>
                <TextField
                    style={field}
                    id="outlined-helperText"
                    label="First Name"
                    defaultValue=""
                    InputLabelProps ={{
                       style: { fontWeight: 'bold', color: '#f05454'}
                       
                    }}
                    // helperText="Some important text"
                />
                <br/>
                <TextField
                    style={field}
                    id="outlined-helperText"
                    label="Last Name"
                    defaultValue=""
                    InputLabelProps ={{
                        style: { fontWeight: 'bold', color: '#f05454'}
                     }}
                    // helperText="Some important text"
                />
                <br/>

                <TextField
                    style={field}
                    id="outlined-helperText"
                    label="Email"
                    defaultValue=""
                    InputLabelProps ={{
                        style: { fontWeight: 'bold', color: '#f05454'}
                     }}
                    // helperText="Some important text"
                />
                <br/>

                <TextField
                    style={field}
                    id="outlined-helperText"
                    label="Address"
                    defaultValue=""
                    InputLabelProps ={{
                        style: { fontWeight: 'bold', color: '#f05454'}
                     }}
                    // helperText="Some important text"
                />
                <br/>

                <FormControl style={field} sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel style={{fontWeight: 'bold', color: '#f05454'}} id="demo-simple-select-helper-label">Ethnicity</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Ethnicity"
                    onChange={handleChange}
                    >
                    <MenuItem value="">
                        <em>Select</em>
                    </MenuItem>
                    <MenuItem value={10}>Black</MenuItem>
                    <MenuItem value={20}>Indigenous</MenuItem>
                    <MenuItem value={30}>Asian</MenuItem>
                    </Select>
                </FormControl>

                <br/>

                <FormControl style={field} sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel style={{fontWeight: 'bold', color: '#f05454'}} id="demo-simple-select-helper-label">Education</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Education"
                    InputLabelProps ={{
                        style: { fontWeight: 'bold', color: '#f05454'}
                     }}
                    onChange={handleChange}
                    >
                    <MenuItem value="">
                        <em>Select</em>
                    </MenuItem>
                    <MenuItem value={10}>High School</MenuItem>
                    <MenuItem value={20}>University</MenuItem>
                    <MenuItem value={30}>Post Grad</MenuItem>
                    </Select>
                </FormControl>

                <br/>

                <FormControl style={field} sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label" style={{fontWeight: 'bold', color: '#f05454'}} >Number of Children</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Number of Children"
                    
                    onChange={handleChange}
                    >
                    <MenuItem value="">
                        <em>Select</em>
                    </MenuItem>
                    <MenuItem value={10}>1</MenuItem>
                    <MenuItem value={20}>2</MenuItem>
                    <MenuItem value={30}>More than 2</MenuItem>
                    </Select>
                </FormControl>

                <br/>


                <Button style={button} variant="outlined">Submit</Button>
            </form> */}
        </div>
    );
}

export default Application;