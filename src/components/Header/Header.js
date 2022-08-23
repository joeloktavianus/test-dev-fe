import * as React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
// import Login from '../../components/Login/Login';

function Header() {
    return (
      <Navbar>
      <Container >
        <Nav>
          <Navbar.Brand  className="logo">
            Cinta Coding
          </Navbar.Brand>
        </Nav>
        <Nav>
          Post
          <hr className="underline" />
        </Nav>
        <Nav>
          <a href="/home/login" className="button-login" >Login</a>
        </Nav>
      </Container>
    </Navbar>
    );
  }
  
  export default Header;
  