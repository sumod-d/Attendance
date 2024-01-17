import * as React from "react";
import IconButton from "@mui/material/IconButton";
import "./Login.css";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import moment from "moment";

import { useDispatch, useSelector } from 'react-redux';


function Login(props) {

    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleUsername = (e) => {
        setUsername(e.target.value);
        dispatch(setUsername(e.target.value));
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    //for login API

    const handleApi = () => {
        console.log({ username, password });
        axios.post('https://practeasebe.onrender.com/api/v1/user/login', {
            email: username, password: password
        })

            .then(result => {
                console.log(result)
                props.setLoggedIn(true);
                // alert('Successful login')
                getClockInData();


                localStorage.setItem("token", result.data.token)

            })
            .catch(error => {
                alert('login failed')
                console.log(error)
            })

        //another API for date and username
       
        
    }
    const getClockInData= ()=>{
        axios.get(`https://practeasebe.onrender.com/api/v1/user/${moment().format('DD-MM-YYYY')}/${username}`)
        
        .then(result => {
            console.log(result)
            alert('api hits')
            props.setClockInData(result.data)

        })
        .catch(error => {
            alert('api failed')

            console.log(error)
        })

    }





    return (
        <>

            <div className='welcome-note'><h3>Welcome  to Attendance</h3></div>

            <div className='text-quotes'>
                <span>The  people who are <br></br>crazy enough to think <br></br> they can change
                    the <br></br> world are the ones <br></br> who do</span>
            </div>
            <div>
                <div className='text-username'>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', padding: '20px' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="User" variant="standard" onChange={handleUsername} />
                    </Box>
                </div>

                <div className='text-pasword'>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={handlePassword}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                </div>
                <br></br>

                {/* <p>Forgot Password</p> */}

                <div className='login-btn' >
                    <Button style={{ borderradius: ' 20px', margin: '5px' }} variant="contained"
                        onClick={handleApi}
                    >Login</Button>
                </div>
            </div>









        </>

    );
}

export default Login;