import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './MyNavbar.css'
function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <div>
        <button type="button" className="btn btn-secondary" style={{ backgroundColor: 'rgb(51, 51, 239)', marginLeft: '55px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-megaphone-fill" viewBox="0 0 16 16">
            <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z" />
          </svg>
        </button>
      </div>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title="Demo" id="nav-dropdown-demo">
            <NavDropdown.Item href="#action">Action</NavDropdown.Item>
            <NavDropdown.Item href="#another-action">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#something-else">Something else here</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Pages" id="nav-dropdown-pages">
            <NavDropdown.Item href="#action">Action</NavDropdown.Item>
            <NavDropdown.Item href="#another-action">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#something-else">Something else here</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Account" id="nav-dropdown-account">
            <NavDropdown.Item href="#action">Action</NavDropdown.Item>
            <NavDropdown.Item href="#another-action">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#something-else">Something else here</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#network">My Network</Nav.Link>
          <button type="button" className="btn btn-secondary" style={{ backgroundColor: '#e6e8eb', border: 'none', marginLeft: '9px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6C757D" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"></path>
            </svg>
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;