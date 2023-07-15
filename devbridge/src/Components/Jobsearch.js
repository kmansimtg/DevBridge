import './JobCards.css';
import '../App.css';
import React from "react";
import './JobDetails.css';
import './Buttons.css';
import { Link } from 'react-router-dom';
import AppHeader from './Header';
import Footerr from './Footer';





function Jobsearch(){return(<div><AppHeader />
 <header></header>
    <div className='upper-part'>
            <div className='wrapper'>




                    <div className="top"> 
                   <div>
                    <div className="jobHeadings">
                       <div className="titlee" >
                        <h3 >Software Developer Intern</h3>
                    
                       </div>
                   <div className="comp">
                      <h4>ZEEKO LIVES LTD</h4>
                    
                       
                   </div>
                <h4>West Palm Beach, FL</h4>
                <div className="apply">
                    <div className="app"><Link to="/jobapply">Apply Now</Link></div>
                    
                </div>
            </div>
            <div className="detailed">
                <div id="jobDescriptionText" class="jobsearch-jobDescriptionText">
                    <p style={{ }}><b>JOB DESCRIPTION:</b></p>
                    <p>We are looking for talented graduate fresher male candidates for email marketing process. Interested candidates should apply if he eligible for this job according to job description .Your main duties include running email marketing campaigns end-to-end and work within a team to generate the efficient result for our company.
                        <br />
                        <b> WE ALSO ARRANGE ONLINE INTERVIEWS </b></p>
                    <p><b><i>Before apply just check our location, because we only hire local candidates due to covid 19. we hire minimum one hour distance candidates, so check the location then apply otherwise we rejected your cv with out any reply.</i></b></p>
                    <p><b><i>We don't take any charges for this job because this is a organisation not a consultancy. so, don't worry about that.</i></b></p>
                    <p><b>Responsibilities and Duties: </b><br />
                      1. Generate leads on daily basis through searching various domain.<br />2. Handle Email Marketing with different tools.<br />3. Formalize a deal report after done with all the campaigns.</p>
                    <p><b>Required Experience, Skills and Qualifications :</b><br /><b>Minimum Qualification : </b> Diploma (Engg.) / Graduation (Any)<br /><b>Age : </b> 18 -28 year(s) only male candidates<br /><b>Experience : </b> 0 - 6 month(s)</p>
                    <p><b>Skills : </b><br /> 1. Basic Knowledge of Microsoft excel.<br />2. Good English Writing skill &amp; typing speed.<br />3. Must be smart to work under team.</p>
                    <p><b>Benefits:</b><br />PF &amp; ESIC is available.<br />Paid Leaves are available.<br /><b>Contact Person : </b> KARAN DORA (HR-Executive)<br /><b>Contact Number : </b>
                     <span class="jobsearch-JobDescription-phone-number"><a href="#MosaicProviderCallToApplyFeedback">7890801159</a></span> ( Office hours only)</p><p><b>Job Type:</b> Fresher<br /><b>Salary:</b> ₹9,500.00 - ₹10,000.00 per month<br /><b>Schedule:</b>Morning shift <br /><b>Supplemental Pay:</b>Commission pay and Performance bonus <br /><b>Education:</b>Diploma (Required)<br/><b>Experience:</b>total work: 1 year (Preferred)<br /><b>Work Remotely:</b>No</p><p><b>Speak with the employer</b><br />+91 <span class="jobsearch-JobDescription-phone-number"><a href="#MosaicProviderCallToApplyFeedback">7890801159</a></span></p></div>
            </div>
        </div>

                   </div>
                    {/* 
              
              
                    
                  
                </div>
                </div> */}
                
                </div>
                </div><Footerr />
                
                
                </div>

);
}
export default Jobsearch;
               


     




