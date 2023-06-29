import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

export default class MechanicWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLogin: false,
      toSignup: false,
    };
  }
  render() {
    if (this.state.toLogin) {
      return <Navigate to="/Loginpage" />;
    }
    if (this.state.toSignup) {
      return <Navigate to="/MechanicSignup" />;
    }
    return (
      <Container style={{ width: "30rem", margin: "150px 500px" }}>
        <h1 style={{ color: "Black", fontFamily: "cursive" }}>
          Hello, Mechanic
        </h1>
        <br />
        <h5 style={{ color: "gray" }}>Your Account is Not Approved Till Now</h5>
        <br />
        <h5 style={{ color: "gray" }}>Our Team is Checking Your Profile</h5>
        <br />
        <h5 style={{ color: "gray" }}>Soon You will Hired To Our Agency</h5>
        <hr></hr>
        <Link href="#">Check Later </Link>
        <br />
        <div>
          <Button
            variant="primary"
            type="button"
            onClick={() => {
              this.setState({ ...this.state, toSignup: true });
            }}
          >
            Logout For Now
          </Button>
        </div>
      </Container>
    );
  }
}
