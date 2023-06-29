import React, { Component } from "react";
import CustomerNavbar from "./Navbar/CustomerNavbar";
import Marquee from "./Marquee";

import RequestService from "./Services/RequestService";

import {
  FiAlertTriangle,
  FiBookOpen,
  FiFastForward,
  FiRotateCw,
} from "react-icons/fi";
import Card from "react-bootstrap/Card";
import CustomerService from "./Services/CustomerService";

class CustomerDashBoard extends Component {
  // componentDidMount() {
  //   document.body.style.overflow = 'hidden';
  // }

  // componentWillUnmount() {
  //   document.body.style.overflow = 'auto';
  // }

  constructor(props) {
    super(props);

    this.state = {
      requests: [],
      pendingCount: 0,
      approvedCount: 0,
      releasedCount: 0,
      totalBill: 0,
    };
  }

  // const [requests,setRequest]= useState("");

  // const navigate = useNavigate();

  componentDidMount() {
    document.body.style.overflow = "hidden";
    const localUser = JSON.parse(localStorage.getItem("user"));
    const user = {
      id: localUser.id,
      emailId: localUser.emailId,
      password: localUser.password,
      role: localUser.role,
    };

    CustomerService.getCustomerByUser(user)
      .then((res) => {
        console.log(res.data.customerID);
        RequestService.getAllRequestByCustomer(res.data.customerID).then(
          (res) => {
            var pcnt = 0,
              acnt = 0,
              rcnt = 0,
              totalCost = 0;
            console.log(res.data);
            res.data.forEach((element) => {
              if (element.status === "Pending") pcnt++;
              else if (
                element.status === "Approved" ||
                element.status === "Repairing" ||
                element.status === "Repairing Done"
              ) {
                acnt++;
                totalCost = totalCost + element.bill;
              } else if (element.status === "Released") {
                rcnt++;
                totalCost = totalCost + element.bill;
              }
            });
            this.setState({
              requests: res.data,
              pendingCount: pcnt,
              approvedCount: acnt,
              releasedCount: rcnt,
              totalBill: totalCost,
            });
          }
        );
      })
      .catch((error) =>
        window.alert("Not authorized user ,Please Register first")
      );
  }

  render() {
    return (
      <div style={{ width: "1600px" }}>
        <CustomerNavbar />
        <div
          className="mt-4 container-fluid"
          style={{ display: "flex", flexdirection: "row", margin: "40px" }}
        >
          <div className="me-4">
            <Card
              style={{
                width: "20rem",
                height: "12rem",
                margin: "10px",
                backgroundColor: "#FF7F50",
              }}
            >
              <Card.Body>
                <Card.Title className="text-center pt-2">
                  {this.state.pendingCount}
                </Card.Title>
                <Card.Text></Card.Text>
                <div className="text-center pt-1">
                  <FiAlertTriangle />
                </div>
                <div className="text-center pt-3">
                  <h5>
                    <b>New Request Made</b>
                  </h5>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="me-4">
            {" "}
            <Card
              style={{
                width: "20rem",
                height: "12rem",
                backgroundColor: "#F0E68C",
                margin: "10px",
              }}
            >
              <Card.Body>
                <Card.Title className="text-center pt-2">
                  {this.state.approvedCount}
                </Card.Title>
                <Card.Text></Card.Text>
                <div className="text-center pt-1">
                  <FiRotateCw />{" "}
                </div>
                <div className="text-center pt-3">
                  <h5>
                    <b>Vehicle Repair In Progress</b>
                  </h5>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="me-4">
            {" "}
            <Card
              style={{
                width: "20rem",
                height: "12rem",
                backgroundColor: "#9ACD32",
                margin: "10px",
              }}
            >
              <Card.Body>
                <Card.Title className="text-center pt-2">
                  {this.state.releasedCount}
                </Card.Title>
                <Card.Text></Card.Text>
                <div className="text-center pt-1">
                  <FiFastForward />
                </div>
                <div className="text-center pt-3">
                  <h5>
                    <b> Vehicle Repaired</b>
                  </h5>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="me-4">
            <Card
              style={{
                width: "20rem",
                height: "12rem",
                backgroundColor: "#BA55D3",
                margin: "10px",
              }}
            >
              <Card.Body>
                <Card.Title className="text-center pt-2"></Card.Title>

                <div className="mt-1" style={{ textAlign: "center" }}>
                  <b>{this.state.totalBill}</b>
                </div>
                <Card.Text></Card.Text>

                <div className="mt-3" style={{ textAlign: "center" }}>
                  <img src="https://img.icons8.com/material-outlined/24/000000/rupee.png" />
                </div>
                <div className="text-center pt-3">
                  <h5>
                    <b> Total Bill</b>
                  </h5>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div style={{ width: "100%", position: "absolute", bottom: "0" }}>
          <Marquee />
        </div>
      </div>
    );
  }
}
export default CustomerDashBoard;
