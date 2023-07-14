import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';
export default function Success(){return(
    <div className="success">
                <img src={require('./assets/img-hero3.jpg')} alt="img" />
                <div className='information'>
                    <div>
                      
                        <p>You will get an email confirmation at <strong>mtg@gmail.com</strong></p>
                    </div>
                    <div>
                       
                        <p><strong>Aivee</strong> typically responds to applications within 10 days.</p>
                    </div>
                    <Link to="/jobapply"><div className='gobackk'>Return to job search</div></Link>
                </div>
            </div>
       
);}