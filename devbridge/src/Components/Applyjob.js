
import React from "react";
import './Form.css';
import '../App.css';
import { Link } from 'react-router-dom';
export default function Applyjob(){
    return(
        <div className='upper-part' >
            <div className='wrapper'>
    <div>
                  <h6>Application step 1 of 3</h6>
                <h4 style={{ fontWeight: 600, margin: "19px 0" }}>Add your contact information</h4>
                <form>
                    <label htmlFor="firstName">First name</label>
                    <input type="text" name="firstName" />
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" name="lastName" />
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input type="text" name="phoneNumber" />
                    <h5>Email</h5>
                    <p>mtg@gmail.com</p>
                    <label htmlFor="city">City, State </label><small>(optional)</small>
                    <input type="text" name="city"  />
                    <div>
                       
                        <p >Your online resume will also be updated with this contact information.</p>
                    </div>
                    <div>
                        <h5>Return to job search</h5>
                        <Link to="/resumeupload">  <button >Continue</button></Link>
                    </div>
                </form>
                <p>Having an issue with this application?<span>Tell us more</span></p>
                </div>
    </div>

    </div>
    );
}








    