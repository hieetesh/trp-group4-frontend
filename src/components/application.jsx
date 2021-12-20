import * as React from 'react';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const container = {
    width:"100%",
    height:"auto",
    // border: "2px solid black",
    padding: "1rem",
    textAlign: "center",
};

const field = {
    // display: "block",
    textAlign: "center",
    margin: "10px auto",
}

const button = {
    display: "block",
    textAlign: "center",
    margin: "20px auto",
}



function Application(props) {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div style={container}>
            <form>
                <TextField
                    style={field}
                    id="outlined-helperText"
                    label="First Name"
                    defaultValue=""
                    // helperText="Some important text"
                />
                <br/>
                <TextField
                    style={field}
                    id="outlined-helperText"
                    label="Last Name"
                    defaultValue=""
                    // helperText="Some important text"
                />
                <br/>

                <TextField
                    style={field}
                    id="outlined-helperText"
                    label="Email"
                    defaultValue=""
                    // helperText="Some important text"
                />
                <br/>

                <FormControl style={field} sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Ethnicity</InputLabel>
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
                    <InputLabel id="demo-simple-select-helper-label">Education</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Education"
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
                    <InputLabel id="demo-simple-select-helper-label">Total Kids</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Total Kids"
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