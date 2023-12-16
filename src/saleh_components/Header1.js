import React from 'react'
import {Row, Col, Form,Button, Container, InputGroup, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCrosshairs } from "react-icons/fa6";



function Header1() {

  return (
    

   
    
    <section className='background-image ' >


      <div className='des'>
          <h1>Find events near you</h1>
          <p>Let's uncover the best places to eat, drink, and shop nearest to you.</p>
      </div>

      <Container>


        <div className='header'>                            
          <Container className='search-area mb-3'>
             <span id="size">We will help you to find all</span>
             <Form>
                <Row className="g-3 mb-3 mt-1" md>
                  <Col md>
                     <Form.Control type="text" placeholder="What" />
                  </Col>
                  <Col className="position-relative" md>
                                        
                    <Form.Control type="text" placeholder="Where" className='pr-5'/>
                     <FaCrosshairs className="search-icon"/>

                  </Col>
                  <Col xs="auto">

                     <Button type="submit" className="btn btn-primary">Search</Button>
                                        
                  </Col>
                  </Row>
              </Form>
          </Container>
          
        </div>
          
          
          
          
          
          
          
          
          
             <Container className="cards-container" >
                <Row className="g-4">
                    <Col md>
                      <Card className='h-100'>
                        <Card.Img 
                          
                          src='https://png.pngtree.com/png-clipart/20220818/ourmid/pngtree-1st-medal-png-image_6114195.png'
                          className='img' 
                        />
                        <Card.Text>
                              <p className='par'>Arts &<br /> Entertainment</p>
                        </Card.Text>
                      </Card>
                    </Col>


                    <Col md> 
                      <Card className="h-100">
                      <div className='img'>
                        <img 
                            src='https://cdn.iconscout.com/icon/free/png-256/free-clock-1605637-1360989.png?f=webp' 
                            className="img-fluid" 
                          />
                        </div>
                        <Card.Text><p className='par'>Events & 
                          <br /> Parties </p></Card.Text>
                        
                      </Card>
                    </Col>


                    <Col md>
                      <Card className="h-100">
                      <div className='img'>
                            <img 
                                src='https://www.freeiconspng.com/uploads/houses-clip-art-pic-13.png'
                                className="img-fluid" 
                              />
                            </div>
                            <Card.Text><p className='par'>PNY E-Gaming 
                              <br /> Fest </p></Card.Text>
                      </Card>
                    </Col>



                    <Col md>
                      <Card className="h-100">
                      <div className='img'>
                            <img 
                                src='https://freeiconshop.com/wp-content/uploads/edd/clipboard-outline-filled.png' 
                                className="img-fluid" 
                              
                              />
                            </div>
                            <Card.Text><p className='par'>Events & 
                              <br /> Parties </p></Card.Text>
                      </Card>
                    </Col>


                    <Col md>
                      <Card className="h-100">
                      <div className='img'>
                            <img 
                                src='https://cdn-icons-png.flaticon.com/512/3474/3474362.png' 
                                className="img-fluid" 
                              
                              />
                            </div>
                            <Card.Text><p className='par'>Sports & 
                              <br /> Wellness </p></Card.Text>
                      </Card>
                    </Col>
          
                </Row>
          
          
              </Container>


      </Container>

                
          
          
    </section>
   
     




      
    

  );
}

export default Header1