import React, { useEffect, useState } from "react";

import { SideBar, SideContent } from "../components/SideBar";
import NavBar from "../components/NavBar";

import { useRouteMatch, Switch, Route, useHistory } from "react-router-dom";

import axios from "axios";

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
    <div className="p-5">
      <Card>
        <Card.Header>Members</Card.Header>
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
            <Members />
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

const ApplicationPage = () => {
  return (
    <div className="p-5">
      <Card>
        <Card.Header>Members</Card.Header>
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
  const [currentIndex, setCurrentIdex] = useState(1);
  const [currentMemberId, setCurrentMemberId] = useState(0);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [newDetail, setnewDetail] = useState({
    fullname: "",
    matricno: "",
    age: "",
    kulliyah: "",
    clubid: "",
    designation: "",
    position: "",
    course: "",
  });

  useEffect(() => {
    retrieveData();
    return () => {
      console.trace("imout");
    };
  }, []);

  const viewMember = (viewindex) => {
    setCurrentIdex(viewindex);
    console.log(data[viewindex]);
    setCurrentMemberId(data[viewindex].memberid);
    setShowModal(true);
  };

  const deleteMember = async () => {
    console.log(currentMemberId);
    try {
      await axios.post("http://localhost:3001/deletemember", {
        memberid: currentMemberId,
      });
      console.log("deleted member", currentIndex);
    } catch (error) {
      console.log(error);
    }
  };

  const updateMember = async () => {
    console.log("wowowo");
    const detail = {
      fullname: newDetail.fullname || data[currentIndex].fullname,
      matricno: newDetail.matricno || data[currentIndex].matricno,
      age: newDetail.age || data[currentIndex].age,
      kulliyah: newDetail.kulliyah || data[currentIndex].kulliyah,
      clubid: newDetail.clubid || data[currentIndex].clubid,
      designation: newDetail.designation || data[currentIndex].designation,
      position: newDetail.position || data[currentIndex].position,
      course: newDetail.course || data[currentIndex].course,
      status: "active",
      memberid: currentMemberId,
    };
    console.log(detail);

    try {
      await axios.post("http://localhost:3001/editmembers", {
        data: {
          ...detail,
        },
      });
      console.log("updated member");
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveData = async () => {
    setIsLoading(true);
    try {
      const results = await axios.get("http://localhost:3001/members");
      console.log(results.data.data);
      const data = results.data.data;
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
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
          <Modal.Title>Member</Modal.Title>
        </Modal.Header>
        {isLoading ? (
          <div>...loading</div>
        ) : (
          <Modal.Body>
            <ListGroup as="ul">
              <ListGroup.Item as="li">
                <Form onSubmit>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={newDetail.fullname}
                      placeholder={data[currentIndex].fullname}
                      onChange={(e) =>
                        setnewDetail({ ...newDetail, fullname: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="matricNo">
                    <Form.Label>Matric Number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder={data[currentIndex].matricno}
                      value={newDetail.matricno}
                      onChange={(e) =>
                        setnewDetail({ ...newDetail, matricno: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder={data[currentIndex].age}
                      value={newDetail.age}
                      onChange={(e) =>
                        setnewDetail({ ...newDetail, age: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="kulliyah">
                    <Form.Label>Kulliyah</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={data[currentIndex].kulliyah}
                      value={newDetail.kulliyah}
                      onChange={(e) =>
                        setnewDetail({ ...newDetail, kulliyah: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="course">
                    <Form.Label>Course</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={data[currentIndex].course}
                      value={newDetail.course}
                      onChange={(e) =>
                        setnewDetail({ ...newDetail, course: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="club">
                    <Form.Label>Club</Form.Label>
                    <Form.Control
                      type=""
                      value={newDetail.clubid}
                      placeholder={data[currentIndex].clubid}
                      onChange={(e) =>
                        setnewDetail({ ...newDetail, clubid: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="designation">
                    <Form.Label>Instrument</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={data[currentIndex].designation}
                      value={newDetail.designation}
                      onChange={(e) =>
                        setnewDetail({
                          ...newDetail,
                          designation: e.target.value,
                        })
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="position">
                    <Form.Label>positon</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder={data[currentIndex].position}
                      value={newDetail.position}
                      onChange={(e) =>
                        setnewDetail({ ...newDetail, position: e.target.value })
                      }
                    />
                  </Form.Group>

                  {/* <Form.Group controlId="email">
                    <Form.Label>positon</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={data[currentIndex].position}
                      readOnly
                    />
                  </Form.Group> */}
                </Form>
              </ListGroup.Item>
            </ListGroup>
          </Modal.Body>
        )}

        <Modal.Footer>
          <Button variant="secondary" onClick={() => deleteMember()}>
            Delete
          </Button>
          <Button variant="primary" onClick={() => updateMember()}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      {isLoading ? (
        <div>...loading</div>
      ) : (
        <>
          {data.map((member, index) => (
            <ListGroup.Item
              action
              onClick={() => viewMember(index)}
              key={member.memberid}
            >
              <Row>
                <Col sm="7">
                  <Card.Text>{member.fullname}</Card.Text>
                </Col>
                <Col>
                  <Card.Text>{member.matricno}</Card.Text>
                </Col>
                <Col>
                  <Card.Text>{member.clubid}</Card.Text>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </>
      )}
    </>
  );
};

const Members = () => {
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
