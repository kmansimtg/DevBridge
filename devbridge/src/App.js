import React, { Component } from 'react';
import Homee from './Components/Home';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';



function App() {
  return (

    <React.StrictMode>
  <Router>
    <Homee />
      </Router>
   </React.StrictMode>
  );
}

export default App;
