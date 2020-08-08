import React, { useEffect, useState } from "react";

import { SideBar, SideContent } from "../components/SideBar";
import NavBar from "../components/NavBar";

import { useRouteMatch, Switch, Route, useHistory } from "react-router-dom";

import {
  Card,
  Col,
  Row,
  ListGroup,
  Modal,
  Button,
  Form,
} from "react-bootstrap";

const HomePage = () => {
  return (
    <div>
      <div>Hello Home Page</div>
    </div>
  );
};

const ApplicationPage = () => {
  return (
    <div className="p-5">
      <Card>
        <Card.Header>Applicants</Card.Header>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col sm="7">
                  <Card.Text>Name</Card.Text>
                </Col>
                <Col>
                  <Card.Text>Matric No</Card.Text>
                </Col>
                <Col>
                  <Card.Text>Club</Card.Text>
                </Col>
              </Row>
            </ListGroup.Item>
            <Applicants />
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

const Applicants = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Applicant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup as="ul">
            <ListGroup.Item as="li">
              <Form>
                <Form.Group controlId="name">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={"detail.name"}
                    placeholder="Enter full Name"
                    readOnly
                  />
                </Form.Group>

                <Form.Group controlId="matricNo">
                  <Form.Label>Matric Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter matric Number"
                    value={"detail.matricNo"}
                    readOnly
                  />
                </Form.Group>

                <Form.Group controlId="age">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter age"
                    value={"detail.age"}
                    readOnly
                  />
                </Form.Group>

                <Form.Group controlId="kulliyah">
                  <Form.Label>Kulliyah</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Kulliyah"
                    value={"detail.kulliyah"}
                    readOnly
                  />
                </Form.Group>

                <Form.Group controlId="course">
                  <Form.Label>Course</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Course"
                    value={"detail.course"}
                    readOnly
                  />
                </Form.Group>

                <Form.Group controlId="club">
                  <Form.Label>Club</Form.Label>
                  <Form.Control type="text" value={"detail.club"} readOnly />
                </Form.Group>

                <Form.Group controlId="designation">
                  <Form.Label>Instrument</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Instrument"
                    value={"detail.designation"}
                    readOnly
                  />
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={"something"}
                    readOnly
                  />
                </Form.Group>
              </Form>
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Accept
          </Button>
          <Button variant="primary">Reject</Button>
        </Modal.Footer>
      </Modal>
      <ListGroup.Item action onClick={() => setShowModal(!showModal)}>
        <Row>
          <Col sm="7">
            <Card.Text>Name</Card.Text>
          </Col>
          <Col>
            <Card.Text>Matric No</Card.Text>
          </Col>
          <Col>
            <Card.Text>Club</Card.Text>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  );
};

const Home = () => {
  const { path, url } = useRouteMatch();

  useEffect(() => {
    console.log(path, url);
    return () => {
      console.trace("Im out");
    };
  }, []);

  return (
    <div>
      <SideBar />
      <SideContent>
        <NavBar headerType="loggedin" />
        <Switch>
          <Route exact path={path} component={HomePage} />
          <Route
            exact
            path={`${path}/application`}
            component={ApplicationPage}
          />
        </Switch>
      </SideContent>
    </div>
  );
};

export default Home;
