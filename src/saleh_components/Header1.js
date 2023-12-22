import React from 'react'
import { useState } from 'react';
import { Row, Col, Form, Button, Container, InputGroup, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCrosshairs } from "react-icons/fa6";
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../config/firebase';
import './MyCss.css';
import MyNavbar from '../Ahmad_Components/Navbar_EventsPage/MyNavbar';
import headerImg from './BackgroundImage.png'


function Header1() {

  const [what, setWhat] = useState('');
  const [error, setError] = useState('');

  const handleSearchClick = async () => {
    setError('');
    try {
      const eventsCollection = collection(db, 'events');
      const querySnapshot = await getDocs(eventsCollection);
      const events = querySnapshot.docs.map(doc => doc.data().name);
      if (events.length > 0) {
        setWhat(events[0]);
      } else {
        setWhat('No events found');
      }
    } catch (error) {
      console.error("Error fetching events: ", error);
      setError('Failed to fetch events. Please try again.');
    }
  };


  return (

    <>

      <section className="position-relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${headerImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          height: "700px",
        }}>
        <MyNavbar />
        <div className='header-des' style={{ marginTop: "160px" }}>
          <h1>Find events near you</h1>
          <p style={{ marginBottom: "10px" }}>Let's uncover the best places to eat, drink, and shop nearest to you.</p>
        </div>
        <div className="container" >
          <div className='header-form bg-white' >
            <Container className='search-area mb-3' >
              <span id="form-title">We will help you to find all</span>
              <Form >
                <Row className="g-3 mb-3 mt-1" md>
                  <Col md>
                    <Form.Control
                      type="text"
                      placeholder="What"
                      value={what}
                      onChange={(e) => setWhat(e.target.value)}
                    />
                  </Col>
                  <Col className="position-relative" md>
                    <Form.Control type="text" placeholder="Where" className='pr-5' />
                    <FaCrosshairs className="search-icon" />
                  </Col>
                  <Col xs="auto">
                    <Button onClick={handleSearchClick} className="btn btn-primary">Search</Button>
                  </Col>
                </Row>
              </Form>
              {error && <div className="alert alert-danger" role="alert">{error}</div>}
            </Container>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container" style={{ marginTop: "-160px" }}   >
        <Row className="g-4" >
          <Col md>
            <Card className='h-100'>
              <Card.Img
                src='https://png.pngtree.com/png-clipart/20220818/ourmid/pngtree-1st-medal-png-image_6114195.png'
                className='card-image'
              />
              <p className='card-content'>Arts &<br /> Entertainment</p>
            </Card>
          </Col>
          <Col md>
            <Card className="h-100" >
              <div className='card-image'>
                <img
                  src='https://cdn.iconscout.com/icon/free/png-256/free-clock-1605637-1360989.png?f=webp'
                  className="img-fluid"
                />
              </div>
              <p className='card-content'>Events &
                <br /> Parties </p>
            </Card>
          </Col>
          <Col md>
            <Card className="h-100">
              <div className='card-image'>
                <img
                  src='https://www.freeiconspng.com/uploads/houses-clip-art-pic-13.png'
                  className="img-fluid"
                />
              </div>
              <p className='card-content'>PNY E-Gaming
                <br /> Fest </p>
            </Card>
          </Col>
          <Col md>
            <Card className="h-100">
              <div className='card-image'>
                <img
                  src='https://freeiconshop.com/wp-content/uploads/edd/clipboard-outline-filled.png'
                  className="img-fluid"
                />
              </div>
              <p className='card-content'>Events &
                <br /> Parties </p>
            </Card>
          </Col>
          <Col md>
            <Card className="h-100">
              <div className='card-image'>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/3474/3474362.png'
                  className="img-fluid"
                />
              </div>
              <p className='card-content'>Sports &
                <br /> Wellness </p>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Header1;


