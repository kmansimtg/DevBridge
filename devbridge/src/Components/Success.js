import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';






export default function Success(){return(
    <div >

                        <div className="success" >
                                    <img src={require('./h33.png')} alt="img" />
                                    <div className='information'>
                                        <div>
                                        
                                            <p>You will get an email confirmation at <strong>mtg@gmail.com</strong></p>
                                        </div>
                                        <div>
                                        
                                            <p><strong>ZEEKO LIVES</strong> typically responds to applications within 10 days.</p>
                                        </div>
                                        <Link to="/searchpage"><div className='gobackk'>Return to job search</div></Link>
                                    </div>
                                </div>
    </div>                            
       
);}