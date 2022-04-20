import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Firebase.Init";
import "./NavBar.css";
const NavBar = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Raj Athletic
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutme">
                About Me
              </Nav.Link>
            </Nav>
            {user ? (
              <Nav>
                <Nav.Link onClick={() => signOut(auth)} as={Link} to="">
                  Sign Out
                </Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link
                  as={Link}
                  to="/login
             "
                >
                  Sign In
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
