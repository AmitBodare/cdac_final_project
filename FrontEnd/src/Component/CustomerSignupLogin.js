import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import NavbarHome from "./NavbarHome";
import Footercomponent from "./Footercomponent";

import { Navigate } from "react-router-dom";
export default class CustomerSignupLogin extends Component {

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
      return <Navigate to="/CustomerSignup" />;
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
          <Container className="col me-2">
            <img
              src="./Images/Customersignup.jpg"
              height={"300px"}
              width="300px"
              alt="LoginImage...."
            />
          </Container>

          <Container className="col mt-4">
            <h1 style={{ color: "black" }}>Hello, Customer</h1>
            <br></br>
            <h5 style={{ color: "orange" }}>
              Welcome to vehicle service Mangement System
            </h5>
            <hr></hr>
            <h5 style={{ color: "green" }}>You Can Access various features after Login</h5>
            <br></br>
            <Button
              variant="primary"
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
