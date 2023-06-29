import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import NavbarHome from "./NavbarHome";
import Footercomponent from "./Footercomponent";
export default class MechanicSignupLogin extends Component {

  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
  }
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
      <div>
        <div style={{ position: "fixed", top: "0", width: "1700px" }}>
          <NavbarHome />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="row" style={{ margin: "50px 400px" }}>
          <Container className="col ml-2">
            <img
              src="./Images/Customersignup.jpg"
              height={"300px"}
              width="300px"
              alt="LoginImage...."
            />
          </Container>
          <Container className="col mt-4">
            <h1 style={{ color: "black" }}>Hello, Mechanic</h1>
            <br></br>
            <h5 style={{ color: "orange" }}>
              Welcome to vehicle service Mangement System
            </h5>
            <hr></hr>
            <h5 style={{ color: "green" }}>You Can Access various features after Login</h5>
            <br></br>
            <Button
              variant="primary"
              type="button"
              onClick={() => {
                this.setState({ ...this.state, toSignup: true });
              }}
            >
              Create Your Account
            </Button>
            &nbsp;&nbsp;
            <Button
              variant="primary"
              type="button"
              onClick={() => {
                this.setState({ ...this.state, toLogin: true });
              }}
            >
              Login
            </Button>
          </Container>
        </div>
        <Footercomponent />
      </div>
    );
  }
}
