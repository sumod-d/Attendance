import React from "react";
import './CustomSwitch.css';
import Menu from './Menu';

const CustomSwitch = props => {


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
        <p className="checkIn">{props.checkIn}</p>

        {!props.checkOut && <div className={"react-switch-button"}>  {!props.isOn ? "Clock in" : "Clock out"}</div>
        }
        <p className="checkOut">{props.checkOut}</p>
      </label>

    </div>




  );
};

export default CustomSwitch;