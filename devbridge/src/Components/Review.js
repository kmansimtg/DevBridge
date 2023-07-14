import React from 'react';
import './Review.css';
import '../App.css';
import {Link} from "react-router-dom";
//import { BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
export default function Review(){return(

        <div className='resum' id ="mu">
    <div id="prog">
</div>
    <div className='backArrow' id ="mu">
                    
                    <h6>Application step 3 of 3</h6></div>
              
                <h2>Please review your application</h2>
                <p>Contact information</p>
                <div className="contactInfo" id ="contr">
                    <div id ="mu">
                        <p>Full Name</p>
                        <h3>Manas Kumar</h3>
                       
                    </div>
                    <div id ="mu">
                        <p>Email Address</p>
                        <h3>mtg@gmail.com</h3>
                        <small>To mitigate fraud, Indeed may mask your email address. If masked, the employer will see an address like <strong>mtg@gmail.com</strong>. Some employers, however, may still be able to unmask and see your actual email address.</small>
                    </div>
                    <div id ="mu">
                        <p>City, State</p>
                        <h3>Muzaffarnagar,UP</h3>
                    </div>
                    <div id ="mu">
                        <p>Phone Number</p>
                        <h3>999999999</h3>
                    </div>
                </div>
               


<h3>Employee questions</h3>
<div className="questions" id ="mu">
    <div id='contr'>
<p>Job Profile</p></div>
    <div id ="mu">
        
        <h3>Chemical Engineer</h3>
    </div>
    <div id ="mu">
        <p>Company name</p>
        <h3>Aivee</h3>
    </div>
    <div id ="mu">
        <p>How many years of total work experience do you have?</p>
        <h3>Worked in ABC</h3>
    </div>
</div>
<p style={{ fontSize: "15px" }}>If you notice an error in your application, please <br /><span style={{ textDecoration: "underline" }}>contact Indeed</span></p>

<div className="checkbox" id ="mu">
    <div id ="mu">
        
        <h3>Notify me by email when similar jobs are available</h3>
    </div>
    <small >By creating a job alert, you agree to our <span>Terms</span>. You can change your consent settings at any time by unsubscribing or as detailed in our terms.</small>
</div>
<small>By pressing apply: 1) you agree to our <span>Terms, Cookie & Privacy Policies</span>; 2) you consent to your application being transmitted to the Employer (Indeed does not guarantee receipt), & processed & analyzed in accordance with its & Indeed's terms & privacy policies; & 3) you acknowledge that when you apply to jobs outside your country it may involve you sending your personal data to countries with lower levels of data protection.</small>
<div id ="mu"><h4>Exit</h4></div>
<div id ="mu">
    
    <Link to="/completed"><button>Submit your application</button>
</Link>
</div>
<p className="textCenter">Having an issue with this application?<span>Tell us more</span></p>

        </div>
);}
