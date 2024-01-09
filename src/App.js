import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './Components/Login'
import Home from './Components/Home'


function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>

      <div className="App">
        <div>



          {!loggedIn ? <Navigate to="/Login"/> : <Navigate to="/Home"/>}

          <Routes>
            <Route path="/Login" element={<Login setLoggedIn={setLoggedIn}/>} />
            <Route path="/Home" element={<Home />} />
            <Route path="/*" element={<Navigate to="/Login" />} />
          </Routes>

        </div>
      </div>
    </>
  )

};

export default App;
