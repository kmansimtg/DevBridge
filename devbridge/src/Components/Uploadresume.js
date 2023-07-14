import React from "react";
import './Uploadresume.css';

import '../App.css';
import { Link } from 'react-router-dom';
export default function Uploadresume(){
    return(
        <div className='upper-part'> 
            <div className='wrapper'>
            <div>
        
        <h6>Application step 2 of 3</h6>
    </div>
    <h3 style={{ marginTop: 20, paddingTop: 20, fontWeight: 700 }}>Add a resume for Manas</h3>
    <input type="file" name="resume"   style={{ display: 'none' }} />
    <div >
      
        <section>
            <h4 style={{ margin: 0, padding: 0 }}>Upload resume</h4>
            <p>Use a pdf, docx, doc, rtf and txt</p>
        </section>
       
    </div>

    <div>
        <h5 style={{ margin: 0, padding: 0 }}>Return to job search</h5>
        <Link to="/review"> <button >Continue</button></Link>
    </div>
    <p>Having an issue with this application?<span>Tell us more</span></p></div></div>
    );
}