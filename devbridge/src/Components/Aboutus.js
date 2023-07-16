import React from "react";
import '../App.css';

import Card from 'react-bootstrap/Card';
import AppHeader from './Header';


 export default function AppAboutus(){
    return(
      <div>
        <AppHeader />
      
              <div id="blog" className="block blog-block">
                
                  <div class="container text-center">
                      <div className="title-holder">
                          <h2>About us</h2>
                          <div className="sub-title">
                              Get to know more about us
                          </div>
                      </div>
                  <div class="row">
                    <div class="col sm-4">
                    <div className="holder">
            
                    <Card >
                              <Card.Img variant="top" src={require('./h11.png')}  />
                              <hr />
                            <Card.Body>
                              <Card.Title>FIND JOB</Card.Title>
                              <Card.Text>
                                Find companies and connect with your preferred ones directly
                            
                              </Card.Text>
                              <a href="https://github.com"className="btn btn-primary">Read More</a>
                            </Card.Body>
                    </Card>

                    </div>
                    </div>
                    <div class="col sm-4">
                    <div className="holder">
                          <Card >
                                <Card.Img variant="top" src={require('./h2222.png')}/>
                                <hr />
                                <Card.Body>
                                  <Card.Title>HIRE</Card.Title>
                                  <Card.Text>
                                    List your company and find appropriate people for your Job.
                                    
                                  </Card.Text>
                                    <a href="https://github.com"className="btn btn-primary">Read More</a>
                                </Card.Body>
                          </Card>
                    </div>
                    </div>
                    <div class="col sm-4">
                    <div className="holder">
                    <Card >
                <Card.Img variant="top" src={require('./h3.png')} />
                <hr />
                <Card.Body>
                  <Card.Title>STARTUPS FREINDLY</Card.Title>
                  <Card.Text>
                    We provide you best options to build your app and website in your budget.
                    
                  </Card.Text>
                  <a href="/contactus"className="btn btn-primary">Contact us</a>
                </Card.Body>
              </Card></div>
                    </div>
                  </div>
                </div>
          </div>
          
      </div>
  
  );}