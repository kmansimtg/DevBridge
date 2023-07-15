import './Header';
import React from "react";
import Alog from './Alog/Alog.js';
import AppHeader from './Header';

import '../App.css';
 import Footerr from './Footer';
const Home =() =>{return(
    <div>
      <header id='header'>
      <AppHeader/>
      </header>
      <div className="d-block w-100 ">

      <Alog />
      </div>
     
      <Footerr />
     
     
    </div>

);};
export default Home;