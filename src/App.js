import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './Components/Login'
import Home from './Components/Home'


import { Provider } from 'react-redux';
import store from './Redux/Store';


function App() {
  
  const [clockInData, setClockInData] = useState({})

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
    <Provider store={store}>

      <div className="App">
        <div>



          {!loggedIn ? <Navigate to="/Login"/> : <Navigate to="/Home"/>}

          <Routes>
            <Route path="/Login" element={<Login setClockInData={setClockInData} setLoggedIn={setLoggedIn}/>} />
            <Route path="/Home" element={<Home clockInData={clockInData}/>} />
            <Route path="/*" element={<Navigate to="/Login" />} />
          </Routes>

        </div>
      </div>
      </Provider>
    </>
  )

};

export default App;
