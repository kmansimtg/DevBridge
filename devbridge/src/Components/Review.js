import React from 'react';
import './Review.css';
import '../App.css';
import {Link} from "react-router-dom";

import AppHeader from './Header';



export default function Review(){return(
    <div className="chal1" >
        <AppHeader />


                <div className='resum' id ="mu"  >
                            <div id="prog">
                            </div>
                            <div className='backArrow' id ="mu">
                                    
                                <h6>Application step 2 of 3</h6></div>
                            
                                <p>PLEASE PREVIEW YOUR APPLICATION<br />
                                  <b>Contact information</b></p>
                                <div className="contactInfo" id ="contr">
                                    <div id ="mu">
                                        <p>Full Name:</p>
                                        <h3>Manas Kumar</h3>
                                        
                                    
                                    </div>
                                    <div id ="mu">
                                        <p>Email Address:</p>
                                        <h3>mtg@gmail.com</h3>
                                        <small>To mitigate fraud, Indeed may mask your email address. If masked, the employer will see an address like <strong>mtg@gmail.com</strong>. Some employers, however, may still be able to unmask and see your actual email address.</small>
                                    </div>
                                    <div id ="mu">
                                        <p>City, State:</p>
                                        <h3>Muzaffarnagar,UP</h3>
                                    </div>
                                    <div id ="mu">
                                        <p>Phone Number:</p>
                                        <h3>999999999</h3>
                                    </div>
                                </div>
                            


                            <h3>Employee questions</h3>
                              <div className="questions" id ="mu">
                                
                                   
                                     <div id ="mu">
                                     <p>JOB PROFILE</p>
                                     <h3>Software Engineer</h3>
                                    </div>
                                    <div id ="mu">
                                     <p>COMPANY NAME</p>
                                     <h3>Ziko Lives Ltd</h3>
                                    </div>
                                    <div id ="mu">
                                       <p>How many years of total work experience do you have?</p>
                                       <h3>Worked in ABC</h3>
                                    </div>
                                </div>
                                <p style={{ fontSize: "15px" }}>If you notice an error in your application, please <br /><span style={{ textDecoration: "underline"  }}>Contact DevBridge</span></p>

                                
                                
                                
                                    
                                    <Link to="/completed"><button>SUBMIT</button>
                                     </Link>
                                
                                <p className="textCenter">Having an issue with this application?<span>Tell us more</span></p>

                </div>
    </div>


);}
