import React, { Component } from "react";
import Marquee from "./Marquee";
import Card from "react-bootstrap/Card";
import {
  FaRupeeSign,
  FaUserFriends,
  FaUsersCog,
  FaDropbox,
  FaComments,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import AdminNavbar from "./Navbar/AdminNavbar";
import RequestService from "./Services/RequestService";
import CustomerService from "./Services/CustomerService";
import MechanicService from "./Services/MechanicService";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requests: [],
      customers: [],
      mechanics: [],

      totalCustomerCount: 0,
      totalMechanicCount: 0,
      totalRequestCount: 0,
      totalFeedbackCount: 0,
    };
  }

  componentDidMount() {
    const localCustomer = JSON.parse(localStorage.getItem("user")).customer;

    console.log("===================================");

    CustomerService.getAllCustomers().then((res) => {
      this.setState({ totalCustomerCount: res.data.length });
    });

    MechanicService.getAllMechanics().then((res) => {
      this.setState({ totalMechanicCount: res.data.length });
    });

    RequestService.getAllRequests().then((res) => {
      var fcnt = 0;
      res.data.forEach((element) => {
        if (element.feedback) fcnt++;
      });

      this.setState({
        totalRequestCount: res.data.length,
        totalFeedbackCount: fcnt,
      });
    });
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: "url('Images/Wallpaper.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <AdminNavbar />
        <div
          className="mt-4 container-fluid"
          style={{ display: "flex", flexdirection: "row", margin: "40px" }}
        >
          <div className="me-4">
            <Link to={"#"} style={{ textDecoration: "none", color: "black" }}>
              <Card
                style={{
                  width: "20rem",
                  height: "12rem",
                  margin: "10px",
                  backgroundColor: "orange",
                }}
              >
                <Card.Body>
                  <Card.Title className="text-center pt-2">
                    {this.state.totalCustomerCount}
                  </Card.Title>
                  <Card.Text></Card.Text>
                  <div className="text-center pt-1">
                    <FaUserFriends />
                  </div>
                  <div className="text-center pt-3">
                    <h5>
                      <b>Total Customer</b>
                    </h5>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>

          <div className="me-4">
            <Link style={{ textDecoration: "none", color: "black" }}>
              <Card
                style={{
                  width: "20rem",
                  height: "12rem",
                  backgroundColor: "yellow",
                  margin: "10px",
                }}
              >
                <Card.Body>
                  <Card.Title className="text-center pt-2">
                    {this.state.totalMechanicCount}
                  </Card.Title>
                  <Card.Text></Card.Text>
                  <div className="text-center pt-1">
                    <FaUsersCog />{" "}
                  </div>
                  <div className="text-center pt-3">
                    <h5>
                      <b>Total Mechanic</b>
                    </h5>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="me-4">
            <Link style={{ textDecoration: "none", color: "black" }}>
              <Card
                style={{
                  width: "20rem",
                  height: "12rem",
                  backgroundColor: "lime",
                  margin: "10px",
                }}
              >
                <Card.Body>
                  <Card.Title className="text-center pt-2">
                    {this.state.totalRequestCount}
                  </Card.Title>
                  <Card.Text></Card.Text>
                  <div className="text-center pt-1">
                    <FaDropbox />
                  </div>
                  <div className="text-center pt-3">
                    <h5>
                      <b> Total Requests</b>
                    </h5>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="me-4">
            <Link style={{ textDecoration: "none", color: "black" }}>
              <Card
                style={{
                  width: "20rem",
                  height: "12rem",
                  backgroundColor: "magenta",
                  margin: "10px",
                }}
              >
                <Card.Body>
                  <Card.Title className="text-center pt-2">
                    {this.state.totalFeedbackCount}
                  </Card.Title>

                  <Card.Text></Card.Text>

                  <div class="pt-1" style={{ textAlign: "center" }}>
                    <FaComments />
                  </div>
                  <div className="text-center pt-3">
                    <h5>
                      <b> Total Feedback</b>
                    </h5>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>
        </div>

        <div style={{ width: "100%", position: "absolute", bottom: "0" }}>
          <Marquee />
        </div>
      </div>
    );
  }
}
export default AdminDashboard;
