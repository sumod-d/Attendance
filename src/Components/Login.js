import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import './Login.css';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

import CustomSwitch from './CustomSwitch';
import { useState } from 'react';
import moment from "moment";

function Login() {



    const [checkInTime, setCheckInTime] = useState(null);
    const [checkOutTime, setCheckOutTime] = useState(null);
    const [isOn, setisOn] = useState(false);


    const [login, setlogin] = useState(false);
    const onLogin = () => {
        setlogin(true);

    };

    const handleOnClick = () => {
        if (isOn) {
            // Checked out
            const currentTime = new Date();
            setCheckOutTime(moment().format('LT'));
        } else {
            // Checked in
            const currentTime = new Date();
            setCheckInTime(moment().format('LT'));
        }

        setisOn(!isOn);
    };




    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    return (
        <>
            {login ? <CustomSwitch checkIn={checkInTime} checkOut={checkOutTime} isOn={isOn} handleToggle={handleOnClick} /> : null}

            <div className='welcome-note'><h3>Welcome  to Attendance</h3></div>

            <div className='text-quotes'>
                <span>The  people who are <br></br>crazy enough to think <br></br> they can change
                    the <br></br> world are the ones <br></br> who do</span>
            </div>
            <div>
                <div className='text-username'>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', padding: '20px' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="User" variant="standard" />
                    </Box>
                </div>

                <div className='text-pasword'>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
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
                <p>Forgot Password</p>

                <div className='login-btn' >
                    <Button style={{ borderradius: ' 20px', margin: '5px' }} variant="contained" onClick={onLogin} >Login</Button>
                </div>
            </div>









        </>

    );
}

export default Login;