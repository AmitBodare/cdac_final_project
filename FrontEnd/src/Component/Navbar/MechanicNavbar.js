import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from './logo.jpg';

const MechanicNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div
      className="position-sticky  container-fluid p-0 m-0 "
      style={{ width: "100%" }}
    >
      <div className="row">
        <nav>
          <Navbar style={{ backgroundColor: "#804674" }} sticky="top" expand="lg">
            <Container>
              <Navbar.Brand>
                <img
                  // src="./Images/logo.jpg"
                  src={logo}
                  height="50px"
                  width="70px"
                  alt="Logo..."
                />

              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link
                    to="/MechanicDashboard"
                    style={{
                      color: "#F39C12",
                      // fontFamily: "cursive",
                      fontSize: "20px",
                      margin: "5px",
                      textDecoration: "none",
                    }}
                  >
                    <big>DashBoard</big>
                  </Link>
                  <Link
                    to="/mechanic/workassigned"
                    style={{
                      color: "#F39C12",
                      // fontFamily: "cursive",
                      fontSize: "20px",
                      margin: "5px",
                      textDecoration: "none",
                    }}
                  >
                    <big>Work Assigned</big>
                  </Link>



                </Nav>

                <Nav>
                  <Link
                    to="/MechanicProfile"
                    className="me-1"
                    style={{
                      color: "#F39C12",
                      // fontFamily: "cursive",
                      fontSize: "20px",
                      margin: "5px",
                      textDecoration: 'none',
                    }}
                  >
                    <img className="m-1 rounded-circle"
                      src="../Images/Customers.jpg"
                      height="40px"
                      width="70px"
                      alt="Logo.."
                    />
                  </Link>
                  <Link
                    to="/Home"
                    className="m-2"
                    style={{
                      color: "#F39C12",
                      // fontFamily: "cursive",
                      fontSize: "20px",
                      margin: "5px",
                      textDecoration: 'none',
                    }}
                    onClick={() => {
                      localStorage.clear();
                    }}
                  >
                    Logout
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>

          </Navbar>
        </nav>
      </div>
    </div>
  );
};

export default MechanicNavbar;
