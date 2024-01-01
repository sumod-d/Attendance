import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import DateSelector from './DateSelector';
import './Task.css'


function Task() {



    const [isIn, setIsIn] = useState(false);
    const [checkInTime, setCheckInTime] = useState(null);
    const [checkOutTime, setCheckOutTime] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');

    const handleToggle = () => {
        if (isIn) {
            const currentTime = new Date().toLocaleTimeString();
            setCheckOutTime(currentTime);


        } else {
            const currentTime = new Date().toLocaleTimeString();
            setCheckInTime(currentTime);
        }
        setIsIn(prevIsIn => !prevIsIn);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
      };





    return (
        <div className='container'>

            <span>Career NiTi</span>
            <h3>Welcome User</h3>
            <div className='switch-button'>
                <p>Attendance App</p>
                <Switch 
                size='medium'
                checked={isIn} 
                onChange={handleToggle} 
                color="primary" />

            </div>

            <div className='time-display'>
                {checkInTime && <p>Checked In at: {checkInTime}</p>}
                {checkOutTime && <p>Checked Out at: {checkOutTime}</p>}
            </div>

            <div className='calender'>
                <h4>Attendance Report</h4>
                <DateSelector onSelectDate={handleDateChange} />
                {selectedDate && <p>Selected Date: {selectedDate}</p>}
            </div>

        </div>
    );


}

export default Task;