import React, { useState } from "react";
import { useHistory, Redirect, Link } from "react-router-dom";

import { Card, Button, Form, Spinner } from "react-bootstrap";

import NavBar from "../components/NavBar";
import BackgroundImage from "../components/BackgroundImage";

export default () => {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <NavBar />
      <BackgroundImage
        imgSource="https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        imgStyle={{ width: "100%", height: "100vh" }}
      />
      <div className="login-page">
        <Card style={{ marginTop: "9rem", width: "350px" }}>
          <Card.Header>Login To CiTRA IIUM </Card.Header>
          <Card.Body>
            {isLoading ? (
              <div className="d-flex justify-content-center">
                <Spinner animation="border" role="status" variant="primary">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
            ) : (
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                  <Form.Text>userError</Form.Text>
                </Form.Group>
              </Form>
            )}
          </Card.Body>
          <Card.Footer>
            <div className="d-flex flex-column justify-content-center">
              <Button variant="primary" onClick={() => history.push("/home")}>
                Login
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};
