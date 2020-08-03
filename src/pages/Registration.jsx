import React from "react";

import { Container, Form, Button } from "react-bootstrap";

import NavBar from "../components/NavBar";

const Registration = () => {
  return (
    <div className="page">
      <NavBar headerType="registration" />
      <Container className="mt-5">
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
          </Form.Group> */}
          {/* <div className="form-group position">
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
          </div> */}
          {/* <div className="form-group position">
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
          </div> */}

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
      </Container>
    </div>
  );
};

export default Registration;
