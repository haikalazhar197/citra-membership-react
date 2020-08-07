import React, { useState } from "react";

import { Container, Form, Button, ListGroup } from "react-bootstrap";

import NavBar from "../components/NavBar";

const Registration = () => {
  const [detail, setDetail] = useState({
    name: "",
    matricNo: "",
    age: "",
    kulliyah: "",
    course: "",
    club: "",
    email: "",
  });

  // function submit() {
  //   console.log(detail)
  // }

  const submit = (e) => {
    e.preventDefault();
    console.log(detail);
    setDetail({
      name: "",
      matricNo: "",
      age: "",
      kulliyah: "",
      course: "",
      club: "",
      email: "",
    });
  };

  return (
    <div className="page">
      <NavBar headerType="registration" />
      <div className="container mt-5">
        <ListGroup as="ul">
          <ListGroup.Item as="li" active>
            Registration
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  value={detail.name}
                  placeholder="Enter full Name"
                  onChange={(e) =>
                    setDetail({ ...detail, name: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="matricNo">
                <Form.Label>Matric Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter matric Number"
                  value={detail.matricNo}
                  onChange={(e) =>
                    setDetail({ ...detail, matricNo: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter age"
                  value={detail.age}
                  onChange={(e) =>
                    setDetail({ ...detail, age: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="kulliyah">
                <Form.Label>Kulliyah</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Kulliyah"
                  value={detail.kulliyah}
                  onChange={(e) =>
                    setDetail({ ...detail, kulliyah: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="course">
                <Form.Label>Course</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Course"
                  value={detail.course}
                  onChange={(e) =>
                    setDetail({ ...detail, course: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="club">
                <Form.Label>Club</Form.Label>
                <Form.Control
                  as="select"
                  type="select"
                  value={detail.club}
                  onChange={(e) =>
                    setDetail({ ...detail, club: e.target.value })
                  }
                >
                  <option>Club: </option>
                  <option>IIUM Acoustic Band</option>
                  <option>IIUM Gamelan Gema Gangsa</option>
                  <option>IIUM Andeka Caklempong</option>
                  <option>IIUM Angklung</option>
                  <option>IIUM Nafas Tari</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="designation">
                <Form.Label>Instrument</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Instrument"
                  value={detail.designation}
                  onChange={(e) =>
                    setDetail({ ...detail, designation: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={detail.email}
                  onChange={(e) =>
                    setDetail({ ...detail, email: e.target.value })
                  }
                />
              </Form.Group>

              <Button
                variant="primary"
                size="lg"
                block
                onClick={(e) => submit(e)}
              >
                Submit
              </Button>
            </Form>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default Registration;

{
  /* <Container className="mt-5">
        <Form>
          <Form.Group>
            <Form.Label for="name">Name</Form.Label>
            <Form.Control type="text" id="name" />
          </Form.Group>

          <Form.Group>
            <Form.Label for="age">Age</Form.Label>
            <Form.Control type="text" id="age" inputMode="numeric" />
          </Form.Group>

          <Form.Group>
            <Form.Label for="matricNo">Matric Number</Form.Label>
            <Form.Control type="text" id="matricNo" inputMode="numeric" />
          </Form.Group>

          <Form.Group>
            <Form.Label for="kulliyah">Kulliyah</Form.Label>
            <Form.Control as="select">
              <option>Please select your Kulliyah</option>
              <option>KOE</option>
              <option>KICT</option>
              <option>KOED</option>
              <option>IRKHS</option>
              <option>KENMS</option>
              <option>AIKOL</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label for="course">Course</Form.Label>
            <Form.Control as="select">
              <option>Please select your course</option>
              <option>BCS</option>
              <option>BIT</option>
              <option>MECHATRONIC</option>
              <option>MECHA</option>
              <option>MANU</option>
              <option>SYARIAH</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label for="intru">Instrument</Form.Label>
            <Form.Control type="text" id="instru" />
          </Form.Group>

          {/* <Form.Group className="position">
            <Form.Label for="position" className="border-bottom">
              Position
            </Form.Label>
            <br />
            <input
              className="form-check-input "
              type="radio"
              name="pres"
              id="position"
              value="option1"
            />
            <label className="form-check-label " for="1">
              President
            </label>
          </Form.Group> */
}
{
  /* <div className="form-group position">
            <input
              className="form-check-input"
              type="radio"
              name="vp1"
              id="position"
              value="option2"
            />
            <label className="form-check-label" for="2">
              Vice President 1
            </label>
          </div> */
}
{
  /* <div className="form-group position">
            <input
              className="form-check-input"
              type="radio"
              name="member"
              id="position"
              value="option3"
              checked
            />
            <label className="form-check-label" for="3">
              Members
            </label>
          </div> 

          <Form.Group>
            <label for="club">Club</label>
            <select className="form-control">
              <option>Please select a club</option>
              <option>IAB</option>
              <option>GGM</option>
              <option>ANDEKA</option>
              <option>ANGKLUNG</option>
              <option>NAFASTARI</option>
            </select>
          </Form.Group>

          <Form.Group>
            <Form.Label for="email">Email address</Form.Label>
            <Form.Control
              type="email"
              id="exampleInputEmail1"
              ariaDescribedby="emailHelp"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Button type="submit">Submit</Button>
        </Form>
      </Container> */
}
