import './Header';
import React from "react";
import Alog from './Alog/Alog.js';
import AppHeader from './Header';
import AppCarousel from './Carousal';
import '../App.css';
const Home =() =>{return(
    <div>
<header id='header'>
      <AppHeader/>
      </header>
  <div className="d-block w-100 ">

<Alog />
</div>
<AppCarousel/>
    </div>

);};
export default Home;