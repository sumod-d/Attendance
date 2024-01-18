import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './Components/Login'
import Home from './Components/Home'


import { Provider } from 'react-redux';
import store from './Redux/Store';
import axios from "axios";
import moment from "moment";

function App() {
  
  const [clockInData, setClockInData] = useState({})

  const [loggedIn, setLoggedIn] = useState(false);
  const [userNameGlobal, setUserNameGlobal] = useState("");
  const getClockInData = (username) => {
    axios
      .get(
        `https://practeasebe.onrender.com/api/v1/user/${moment().format(
          "DD-MM-YYYY"
        )}/${username}`
      )

      .then((result) => {
        console.log(result);
        setClockInData(result.data);
      })
      .catch((error) => {

        console.log(error);
      });
  };

  return (
    <>
    <Provider store={store}>

      <div className="App">
        <div>



          {!loggedIn ? <Navigate to="/Login"/> : <Navigate to="/Home"/>}

          <Routes>
            <Route path="/Login" element={<Login setClockInData={setClockInData} setLoggedIn={setLoggedIn} getClockInData={getClockInData} setUserNameGlobal={setUserNameGlobal}/>} />
            <Route path="/Home" element={<Home clockInData={clockInData} getClockInData={getClockInData} userNameGlobal={userNameGlobal}/>} />
            <Route path="/*" element={<Navigate to="/Login" />} />
          </Routes>

        </div>
      </div>
      </Provider>
    </>
  )

};

export default App;
