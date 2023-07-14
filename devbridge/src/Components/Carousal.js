
import React from 'react';
import '../App.css';

const Carousal=()=>{
    return(
    <div id="home" className='hero-block'>
    
       <div className='title-holder'>
       <h2>About Us</h2>
        <div className='subtitle'>Learn More About Us</div>
       
      </div>
      
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class="active" aria-current="true" aria-label="Slide 1" ></button>
         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 2" ></button>
         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
        <div class="carousel-item active" >
        <img src={require('./assets/img-hero1.jpg')}class="d-block w-100" alt="Slide 1"></img>
        <div class="carousel-caption d-none d-md-block">
        <h3>Find jobs,hire or build app and websites? We have got you covered.</h3>
        <p>DevBridge acts as a bridge between job seekers and employees and between customers and developers</p>

        </div>
      </div>
      <div class="carousel-item" >
        <img src={require('./assets/img-hero2.jpg')}class="d-block w-100" alt="Slide 2"></img>
        <div class="carousel-caption d-none d-md-block">
        <h3>The perfect place to build your app and website</h3>
        <p>We provide you authentic companies and frelancers that will build your website and apps in your budget</p>
       
      </div>
    </div>
    <div class="carousel-item" >
      <img src={require('./assets/img-hero3.jpg')} class="d-block w-100" alt="Slide 3"></img>
      <div class="carousel-caption d-none d-md-block">
      <h3>The perfect place to hire and find jobs</h3>
        <p>Provide basic details and we will help you seek jobs in your technical domain. We have the perfect interface to hire employees.</p>
       
      </div>
    </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div>
</div>
  





);}

    
  
 
export default Carousal;