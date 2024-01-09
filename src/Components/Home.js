import CustomSwitch from "./CustomSwitch";
import { useEffect, useState } from "react";
import moment from "moment";


function Home() {



    const [checkInTime, setCheckInTime] = useState(null);
    const [checkOutTime, setCheckOutTime] = useState(null);
    const [isOn, setisOn] = useState(false);



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



    return (
        <>
            <CustomSwitch checkIn={checkInTime} checkOut={checkOutTime} isOn={isOn} handleToggle={handleOnClick} />
        </>
    );
}

export default Home;