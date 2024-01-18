import React from "react";
import axios from "axios";
import moment from "moment";
import "./CustomSwitch.css";
import Menu from "./Menu";

const CustomSwitch = (props) => {
  console.log();
  //userNameGlobal
  //getClockInData
  const handelClockIn = () => {
    console.log("check in");
    const payload = {
      clock_in_date: moment().format("DD-MM-YYYY"),

      user_email: "vivek@gmail.com",
    };
    if (!props?.clockInData?.clock_in_time) {
      payload["clock_in_time"] = moment().format();
    } else {
      payload["clock_out_time"] = moment().format();
    }
    axios
      .post(`https://practeasebe.onrender.com/api/v1/user/clock-in`, payload)
      .then((response) => {
        props?.getClockInData(props?.userNameGlobal);

        console.log(response);
      });
  };
  console.log(props.checkOut?.clock_in_time);

  console.log(props.checkOut?.clock_in_time);

  console.log(
    !props.checkOut?.clock_in_time || !props.checkOut?.clock_out_time
  );
  return (
    <div className="Attendance">
      <Menu />
      <input
        checked={props?.clockInData?.clock_in_time} //false
        onChange={props.handleToggle}
        type="checkbox"
        id={"react-switch-new"}
        className="react-switch-checkbox"
      />
      <label
        style={{
          background: props?.clockInData?.clock_in_time && props.onColor,
        }}
        className="react-switch-label"
        htmlFor={"react-switch-new"}
        onClick={
          !props.clockInData?.clock_in_time ||
          !props.clockInData?.clock_out_time
            ? handelClockIn
            : () => {
                
              }
        }
      >
        <p className="checkIn">
          {moment(props?.clockInData?.clock_in_time).format("hh:mm A")}
        </p>

        {(!props.clockInData?.clock_in_time ||
          !props.clockInData?.clock_out_time) && (
          <div className={"react-switch-button"}>
            {" "}
            {!props?.clockInData?.clock_in_time ? "Clock in" : "Clock out"}
          </div>
        )}
        <p className="checkOut">
          {moment(props?.clockInData?.clock_out_time).format("hh:mm A")}
        </p>
      </label>
    </div>
  );
};

export default CustomSwitch;
