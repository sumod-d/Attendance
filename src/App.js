import './App.css';
import { useState } from 'react';
import CustomSwitch from './Components/CustomSwitch';
import Login from './Components/Login'
// import moment from"moment";

function App() {
  // const [checkInTime, setCheckInTime] = useState(null);
  // const [checkOutTime, setCheckOutTime] = useState(null);
  // const [isOn, setisOn] = useState(false);
  
  // const handleOnClick = () => {
  //   if (isOn) {
  //     // Checked out
  //     const currentTime = new Date();
  //     setCheckOutTime(moment().format('LT'));
  //   } else {
  //     // Checked in
  //     const currentTime = new Date();
  //     setCheckInTime(moment().format('LT'));
  //   }

  //   setisOn(!isOn);
  // };

  return (
    <>
   
    <div className="App">
      <div className='status-bar'>
        
      </div>
      <Login/>

      

      <div>
        <div >
       
        {/* <CustomSwitch checkIn={checkInTime} checkOut={checkOutTime} isOn={isOn} handleToggle={handleOnClick} /> */}

        </div>
      </div>


    </div>
    </>
  )

};

export default App;
