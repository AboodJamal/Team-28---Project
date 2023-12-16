
import {Container, Col, Row, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsEmojiSmile } from "react-icons/bs";
import { BsLayers } from "react-icons/bs";
import { BsInfoCircle } from "react-icons/bs";
import { FcNext } from "react-icons/fc";


import React from 'react'

function RecommendedTopics() {
  return (
    <div className="App">

    <h3 className="RT">Recommended topics</h3>
    <Container>
      <Row className="g-4">
        <Col md>
          <Card  className="h-100">
           <Card.Body>
            <Card.Title>
            <div className='icon1'>
              <BsEmojiSmile/>
              </div>
              </Card.Title>
            <Card.Text><h4 id="GS">Get Started</h4></Card.Text>
              
              <ul className="list-unstyled">
                <li>
                <FcNext/>Gulp and Customization
                </li>
                <li>
                <FcNext/>Color Scheme and Logo Settings
                </li>
                <li>
                <FcNext/>Dark mode, RTL Version and Lazy Load
                </li>
                <li>
                <FcNext/>Sources, Credits and Changelog
                </li>
                <li>
                <FcNext/>Updates and Support
                </li>
              </ul>
              
            </Card.Body>
          </Card>
        </Col>
        <Col md>
        <Card  className="h-100">
           <Card.Body>
            <Card.Title>
              <div className='icon2'>
                <BsLayers/>
              </div>
              </Card.Title>
            <Card.Text><h4 id="AS">Account Setup</h4></Card.Text>
              
              <ul className="list-unstyled">
                <li>
                <FcNext/>Connecting to your Account
                </li>
                <li>
                <FcNext/>Edit your profile information
                </li>
                <li>
                <FcNext/>Connecting to other Social Media Accounts
                </li>
                <li>
                <FcNext/>Adding your profile picture
                </li>
                <li>
                <FcNext/>Describing your store
                </li>
              </ul>
              
            </Card.Body>
          </Card>
        </Col>  
        <Col md>
        <Card  className="h-100">
           <Card.Body>
            <Card.Title>
            <div className='icon3'>
              <BsInfoCircle/>
            </div>
              </Card.Title>
            
            <Card.Text><h4 id="OT">Other Topics</h4></Card.Text>
              
              <ul className="list-unstyled">
                <li>
                <FcNext/>Security & Privacy
                </li>
                <li>
                <FcNext/>Author, Publisher & Admin Guides
                </li>
                <li>
                <FcNext/>Pricing plans
                </li>
                <li>
                <FcNext/> Sales Tax & Regulatory Fees
                </li>
                <li>
                <FcNext/>Promotions & Deals
                </li>
              </ul>
              
            </Card.Body>
          </Card>
        </Col>

      </Row>


    </Container>
    
 
   
    

  </div>
  )
}

export default RecommendedTopics

