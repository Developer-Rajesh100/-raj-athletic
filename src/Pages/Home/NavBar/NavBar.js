import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <Navbar fixed="top" className="navBackground" bg="" expand="lg">
        <Container>
          <Navbar.Brand href="/">Raj Athletic</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <div className="d-flex justify-content-around">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/blogs">Blogs</Nav.Link>
                <Nav.Link href="aboutme">About Me</Nav.Link>
                <Nav.Link href="Signin">Sign In</Nav.Link>
                <Nav.Link href="signup">Sign Up</Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
