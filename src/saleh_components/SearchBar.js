import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';



const SearchBar = () => {

  return (

        <Form className="search-bar">
        <Row>
                <Col>
                    <Form.Control placeholder="What" />
                </Col>
                <Col>
                    <Form.Control placeholder="Where" />
                </Col>
                <Col>
                    <Button variant="primary">Search</Button>
                </Col>
        </Row>
        </Form>
  );

};

export default SearchBar;
