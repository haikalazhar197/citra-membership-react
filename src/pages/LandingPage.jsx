import React from "react";

import NavBar from "../components/NavBar";
import BackgroundImage from "../components/BackgroundImage";

import { Button } from "react-bootstrap";

import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();

  return (
    <div>
      <NavBar />
      <BackgroundImage
        imgSource="https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        imgStyle={{ width: "100%", height: "100vh" }}
      />
      <section className="hero-section bg">
        <h1>Where Dreams Begin</h1>
        <h2>Register to begin a new life</h2>
        <div
          style={{ width: "15vw" }}
          className="d-flex justify-content-around mt-5"
        >
          <Button
            size="lg"
            variant="secondary"
            onClick={() => history.push("/login")}
          >
            Login
          </Button>
          <Button
            size="lg"
            variant="primary"
            onClick={() => history.push("/registration")}
          >
            Register
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
