import React, { Component } from "react";

import Marquee from "./Marquee";
import { Link, useNavigate } from "react-router-dom";

import AdminNavbar from "./Navbar/AdminNavbar";

import {
  FiAlertTriangle,
  FiBookOpen,
  FiFastForward,
  FiRotateCw,
} from "react-icons/fi";

import Card from "react-bootstrap/Card";

class AdminCustomer extends Component {
  render() {
    return (
      <div>
        <AdminNavbar />
        <div
          className="mt-4 container-fluid"
          style={{ display: "flex", flexdirection: "row", margin: "40px" }}
        >
          <div className="me-4">
            <Link
              to={"/admin/allCustomers"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card
                style={{
                  width: "20rem",
                  height: "12rem",
                  margin: "10px",
                  backgroundColor: "lightgrey",
                }}
              >
                <Card.Body>
                  <Card.Title className="text-center pt-2">
                    <div className="mt-3" style={{ textAlign: "center" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    </div>
                  </Card.Title>
                  <Card.Text></Card.Text>

                  <div className="text-center pt-3">
                    <h5>
                      <b>View All Customers</b>
                    </h5>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>

          <div className="me-4">
            {" "}
            <Link
              to={"/admin/makeCustomer"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card
                style={{
                  width: "20rem",
                  height: "12rem",
                  backgroundColor: "#A74AC7",
                  margin: "10px",
                }}
              >
                <Card.Body>
                  <Card.Title className="text-center pt-2">
                    <div className="mt-3" style={{ textAlign: "center" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-plus-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                      </svg>
                    </div>
                  </Card.Title>
                  <Card.Text></Card.Text>

                  <div className="text-center pt-3">
                    <h5>
                      <b>Add Customer</b>
                    </h5>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="me-4">
            {" "}
            <Link
              to={"/admin/adminCustomerEnquiry"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card
                style={{
                  width: "20rem",
                  height: "12rem",
                  backgroundColor: "lightgreen",
                  margin: "10px",
                }}
              >
                <Card.Body>
                  <Card.Title className="text-center pt-2">
                    <div className="mt-3" style={{ textAlign: "center" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-check-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </div>
                  </Card.Title>
                  <Card.Text></Card.Text>

                  <div className="text-center pt-3">
                    <h5>
                      <b>Enquiry Made By Customer</b>
                    </h5>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="me-4">
            <Link
              to={"/admin/customer/invoice"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card
                style={{
                  width: "20rem",
                  height: "12rem",
                  backgroundColor: "#F9B7FF",
                  margin: "10px",
                }}
              >
                <Card.Body>
                  <Card.Title className="text-center pt-2"></Card.Title>

                  <div className="mt-4" style={{ textAlign: "center" }}>
                    <img src="https://img.icons8.com/material-outlined/24/000000/rupee.png" />
                  </div>

                  <div className="text-center pt-4">
                    <h5>
                      <b>View Customer Invoice</b>
                    </h5>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: "0", width: "100%" }}>
          <Marquee />
        </div>
      </div>
    );
  }
}
export default AdminCustomer;
