import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const AdminNavbar = ({ handleSearch }) => {
  return (
    <div>
      <Navbar style={{ backgroundColor: "pink" }}>
        <Container>
          <Navbar.Brand>
            <img
              src="../Images/logo1.jpg"
              height="50px"
              width="70px"
              alt="Logo.."
            />
          </Navbar.Brand>
          <Navbar.Brand
            to="#"
            style={{
              color: "purple",

              fontSize: "20px",
              margin: "5px",
              textDecoration: "none",
            }}
          >
            Vehicle Service Management System{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link
              to="/admin/dashboard"
              style={{
                color: "purple",

                fontSize: "20px",
                margin: "5px",
                textDecoration: "none",
              }}
            >
              Dashboard
            </Link>
            <Link
              to="/admin/adminCustomer"
              style={{
                color: "purple",

                fontSize: "20px",
                margin: "5px",
                textDecoration: "none",
              }}
            >
              Customer
            </Link>
            <Link
              to="/admin/mechanic"
              style={{
                color: "purple",

                fontSize: "20px",
                margin: "5px",
                textDecoration: "none",
              }}
            >
              Mechanic
            </Link>
            <Link
              to="/admin/request"
              style={{
                color: "purple",

                fontSize: "20px",
                margin: "5px",
                textDecoration: "none",
              }}
            >
              Request
            </Link>
            <Link
              to="/admin/feedbackReview"
              style={{
                color: "purple",

                fontSize: "20px",
                margin: "5px",
                textDecoration: "none",
              }}
            >
              FeedBack
            </Link>
          </Nav>

          <nav>
            <Link
              to="/Home"
              className="m-3"
              style={{
                color: "purple",

                fontSize: "20px",
                margin: "5px",
                textDecoration: "none",
              }}
              onClick={() => {
                localStorage.clear();
              }}
            >
              Logout
            </Link>
          </nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default AdminNavbar;
