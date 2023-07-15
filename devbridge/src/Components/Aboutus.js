import React from "react";
import '../App.css';
import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';
 export default function AppAboutus(){
    return(
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
      <Card.Img variant="top" src={require('./Alog/dev.png')}  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="#"className="btn btn-primary">Read More</a>
      </Card.Body>
    </Card>

           </div>
          </div>
          <div class="col sm-4">
          <div className="holder">
          <Card >
      <Card.Img variant="top" src={require('./Alog/dev.png')}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="#"className="btn btn-primary">Read More</a>
      </Card.Body>
    </Card>
    </div>
          </div>
          <div class="col sm-4">
          <div className="holder">
          <Card >
      <Card.Img variant="top" src={require('./Alog/dev.png')} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="#"className="btn btn-primary">Read More</a>
      </Card.Body>
    </Card></div>
          </div>
        </div>
      </div></div>);}