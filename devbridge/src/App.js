import React, { Component } from 'react';
import Homee from './Components/Home';
import SignUp from './Components/Signup';
import Login from './Components/Login';


import { BrowserRouter as Router, Routes, Route ,Switch } from "react-router-dom";

import './App.css';



function App() {
  return (
    <div>

       <React.StrictMode>
         <Router>
          <Routes>
             <Route path="/" element={<Homee /> }/>
             <Route path="/signup" element={<SignUp /> }/>
             <Route path="/login" element={<Login /> }/>



          </Routes>
           
         </Router>
       </React.StrictMode>
   </div>
  );
}

export default App;
