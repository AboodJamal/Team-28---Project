import {Container, Col, Row, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsEmojiSmile } from "react-icons/bs";
import { BsLayers } from "react-icons/bs";
import { BsInfoCircle } from "react-icons/bs";
import { FcNext } from "react-icons/fc";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import {db} from '../config/firebase';

import React from 'react'


function RecommendedTopics() {

  const[topics1, setTopics1] = useState([]);
  const[topics2, setTopics2] = useState([]);
  const[topics3, setTopics3] = useState([]);


  useEffect(() => {
   
     onSnapshot(collection(db, "recommendedTopics1"), (snapshot) => {
      setTopics1(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  
    
    onSnapshot(collection(db, "recommendedTopics2"), (snapshot) => {
      setTopics2(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  
    
     onSnapshot(collection(db, "recommendedTopics3"), (snapshot) => {
      setTopics3(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  
   
  }, []);
  

  





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
              
              <ul className="list">
              
                {topics1.map((t) => {
                  return ( 
                    <li key={t.id}>
                      <FcNext /> {t.topic}
                    </li>
                  );
                })}
                   
              
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
              
              <ul className="list">
              {topics2.map((t) => {
                  return ( 
                    <li key={t.id}>
                      <FcNext /> {t.topic}
                    </li>
                  );
                })}
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
              
              <ul className="list">
              {topics3.map((t) => {
                  return ( 
                    <li key={t.id}>
                      <FcNext /> {t.topic}
                    </li>
                  );
                })}
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