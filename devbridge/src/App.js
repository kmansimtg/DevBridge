import React, { Component } from 'react';
import Homee from './Components/Home';
import SignUp from './Components/Signup';
import Login from './Components/Login';
import Contactus from './Components/Contact';
import Reviewonce from './Components/Review';
import Searchjob from './Components/Jobsearch';
import Completed from './Components/Success';
import Resumeupload from './Components/Uploadresume';
import Jobapply from './Components/Applyjob';

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
            <Route path="/review" element={<Reviewonce/> }/>
            <Route path="/completed" element={<Completed /> }/>
          <Route path="/jobapply" element={<Jobapply /> }/>
          <Route path="/resumeupload" element={<Resumeupload /> }/>
          <Route path="/reviewonce" element={<Jobapply /> }/>
          <Route path="/searchjob" element={<Searchjob />}/>
<Route path="/contactus" element={<Contactus /> }/>
</Routes>

         
         </Router>
       </React.StrictMode>
   </div>
  );
}

export default App;
