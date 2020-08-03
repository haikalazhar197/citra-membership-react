import React from "react";

import { Navbar, Nav, Button } from "react-bootstrap";

const NavBar = ({ headerType = "landing" }) => {
  if (headerType === "landing") {
    return (
      <div>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home">CiTRA IIUM Membership</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <Button className="mr-sm-2">Register</Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  } else if (headerType === "loggedin") {
    return (
      <div>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home">CiTRA IIUM Membership</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <Button className="mr-sm-2">Logout</Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home">CiTRA IIUM Membership</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
};

export default NavBar;
