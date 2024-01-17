import React from "react";
import axios from "axios";
import moment from "moment";
import './CustomSwitch.css';
import Menu from './Menu';

const CustomSwitch = props => {
  console.log()

  const handelClockIn = () => {
    console.log("check in")
    axios.post(`https://practeasebe.onrender.com/api/v1/user/clock-in`, {
      clock_in_date: moment().format('DD-MM-YYYY'),
      clock_in_time: moment(),
      user_email: "vivek@gmail.com"
    })
      .then((response) => {

        console.log(response)
      });

    }
    const handelClockOut = () => {
      console.log("check in")
      axios.post(`https://practeasebe.onrender.com/api/v1/user/clock-out`, {
        clock_in_date: moment().format('DD-MM-YYYY'),
        clock_out_time: moment().format('L'),
        user_email: "vivek@gmail.com"
      })
        .then((response) => {

          console.log(response)
        });






    }



    return (



      <div className="Attendance">
        <Menu />
        <input
          checked={props.isOn}
          onChange={props.handleToggle}
          type="checkbox"
          id={"react-switch-new"}
          className="react-switch-checkbox"


        />
        <label
          style={{ background: props.isOn && props.onColor }}
          className="react-switch-label"
          htmlFor={"react-switch-new"}
        >
          <p className="checkIn"
            onClick={handelClockIn}
          >{props.checkIn}</p>

          {!props.checkOut && <div className={"react-switch-button"}>  {!props.isOn ? "Clock in" : "Clock out"}</div>
          }
          <p className="checkOut"
            onClick={handelClockOut}>{props.checkOut}</p>
        </label>

      </div>




    );
  }

  export default CustomSwitch;