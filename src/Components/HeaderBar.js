import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./../styles/HeaderBar.css";

function HeaderBar() {
  return (
    <div className="HeaderBar">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">Drawa</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/trading">
                Trading
              </Nav.Link>
              <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/draw">
                  Draw
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/shop">
                  Shop
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/cart">
                  Cart
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* <Button variant="dark" as={Link} to="/loginPage" onClick={() => {}}>Login</Button> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderBar;
