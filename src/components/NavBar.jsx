import React from "react";

import { Navbar, Button } from "react-bootstrap";

import { useHistory } from "react-router-dom";

const NavBar = ({ headerType = "landing" }) => {
  const history = useHistory();

  if (headerType === "landing") {
    return (
      <div>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand>CiTRA IIUM Membership</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Button
              className="mr-sm-2 ml-auto"
              onClick={() => history.push("/registration")}
            >
              Register
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  } else if (headerType === "loggedin") {
    return (
      <div>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Button className="mr-sm-2 ml-auto">Logout</Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand>CiTRA IIUM Membership</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
      </div>
    );
  }
};

export default NavBar;
