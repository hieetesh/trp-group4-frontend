import * as React from 'react';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { lightBlue, yellow } from '@mui/material/colors';
import { ClassNames } from '@emotion/react';


const container = {
    width:"100%",
    height:"auto",
    //border: "2px solid black",
    padding: "1rem",
    textAlign: "center",
    backgroundColor: "yellow",
};

const field = {
    // display: "block",
    textAlign: "left",
    margin: "10px auto",
    width: 700

}

const button = {
    display: "block",
    textAlign: "center",
    margin: "20px auto",
    fontWeight: 'bold'
}

const style1={
    marginLeft: 220,
    marginRight: 220
};




function Application(props) {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
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
            </form>
        </div>
    );
}

export default Application;