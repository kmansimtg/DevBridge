import React from 'react';
import '../App.css';
export default function Contact(){
    return(

    <div id='contact' className='block contact-block'>
        <div className='container'>
            <div className='title-holder'>
                <h2>Contact us</h2>
                <div className='subtitle'>Get connected with us</div>
            </div>
            <div className='contact-form'>
            <div class="row">
  <div class="col sm-4">
    <input type="text" class="form-control" placeholder="Enter your full name" aria-label="Enter your full name" typeof='text' required/>
  </div>
  <div class="col sm-4">
    <input type="text" class="form-control" placeholder="Enter your email address" aria-label="Enter your email address" typeof='email' required/>
  </div>
  <div class="col sm-4">
    <input type="text" class="form-control" placeholder="Enter your contact number" aria-label="Enter your contact number" typeof='tel' required/>
  </div>
</div>
<div class="row">
<div class="col sm-12">
<div class="form-floating">
  <textarea class="form-control" placeholder="Enter your message" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>
</div>
</div>

{/* <div className='contact-info'>
  <ul>
    <li>
      <i class="fas fa-envelope"></i>
      hello@gmail.com
    </li>
    <li>
      <i class="fas fa-phone"></i>
      0000-0000-000
    </li>
    <li>
      <i class="fas fa-map-marker-alt"></i>
      London,United Kingdom
    </li>
  </ul>

</div> */}

</div>
<div className='btn-holder' id='krum'><button type="submit"  >Submit</button></div>
</div>
</div>
    );
}