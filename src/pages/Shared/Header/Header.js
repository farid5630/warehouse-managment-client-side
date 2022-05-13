import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
   const [user, loading, error] = useAuthState(auth);
   const logOut = () => {
     signOut(auth);
   };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none text-dark">
              React-Bootstrap
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto me-5">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/addProduct">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/home">
                Pricing
              </Nav.Link>
            </Nav>

            <Nav className="ms-auto">
              {user ? (
                <div className="d-flex align-items-center">
                  <p className="me-2 text-light m-0">{user?.displayName}</p>
                  <button onClick={logOut}>Sign Out</button>
                </div>
              ) : (
                <div className="d-flex">
                  <Nav.Link as={Link} to="/login">
                    SignIn
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                    Sign Up
                  </Nav.Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
