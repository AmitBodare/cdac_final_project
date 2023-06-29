import React, { Component } from "react";
import MechanicNavbar from "./Navbar/MechanicNavbar";
import Marquee from "./Marquee";
import RequestService from "./Services/RequestService";
import MechanicService from "./Services/MechanicService";



import {
  FiAlertTriangle,
  FiRotateCw,
} from "react-icons/fi";
import Card from "react-bootstrap/Card";


class MechanicDashboard extends Component {

  // componentDidMount() {
  //   document.body.style.overflow = 'hidden';
  // }

  // componentWillUnmount() {
  //   document.body.style.overflow = 'auto';
  // }



  constructor(props) {
    super(props)

    this.state = {
      requests: [],
      newWorkAssignCount: 0, workInProgressCount: 0, workCompletedCount: 0,
      salary: 0

    };
  }




  componentDidMount() {
    document.body.style.overflow = 'hidden';

    const localUser = JSON.parse(localStorage.getItem("user"));
    const user = {
      id: localUser.id,
      emailId: localUser.emailId,
      password: localUser.password,
      role: localUser.role
    }

    // componentWillUnmount() {
    //   document.body.style.overflow = 'auto';
    // }

    MechanicService.getMechanicByUser(user).then((res) => {
      this.setState({ salary: res.data.salary })
      console.log(res.data.customerID)
      RequestService.getAllRequestByMechanicId(res.data.mechanicID)
        .then((res) => {
          var nwcnt = 0, wipcnt = 0, wccnt = 0
          console.log(res.data)
          res.data.forEach(element => {
            if (element.status === "Approved")
              nwcnt++;
            else if (element.status === "Repairing") {
              wipcnt++;

            }
            else if (element.status === "Repairing Done")
              wccnt++;
          });
          this.setState({ requests: res.data, newWorkAssignCount: nwcnt, workInProgressCount: wipcnt, workCompletedCount: wccnt })

        })



    }).catch((error) =>
      window.alert("Not authorized user ,Please Register first")
    )


  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
  }



  render() {
    return (


      <div>
        <MechanicNavbar />
        <div
          className="mt-4 container-fluid"
          style={{ display: "flex", flexdirection: "row", margin: '80px' }}
        >
          <div className="me-3">

            <Card
              style={{
                width: "20rem",
                height: "12rem",
                margin: "10px",
                backgroundColor: "#FFA500",
              }}
            >
              <Card.Body>
                <Card.Title className="text-center pt-2">
                  {this.state.newWorkAssignCount}
                </Card.Title>
                <Card.Text></Card.Text>
                <div className="text-center pt-1">
                  <FiAlertTriangle /></div>
                <div className="text-center pt-3">
                  <h5><b>New Work Assigned</b></h5></div>

              </Card.Body>
            </Card>

          </div>

          <div className="me-3">
            {" "}
            <Card
              style={{
                width: "20rem",
                height: "12rem",
                backgroundColor: "#FFD700",
                margin: "10px",
              }}
            >
              <Card.Body>
                <Card.Title className="text-center pt-2">
                  {this.state.workInProgressCount}
                </Card.Title>
                <Card.Text></Card.Text>
                <div className="text-center pt-1">
                  <FiRotateCw /> </div>
                <div className="text-center pt-3">
                  <h5><b>Work In Progress</b></h5>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="me-3">
            {" "}
            <Card
              style={{
                width: "20rem",
                height: "12rem",
                backgroundColor: "#00FF7F",
                margin: "10px",
              }}
            >
              <Card.Body>
                <Card.Title className="text-center pt-2">
                  {this.state.workCompletedCount}

                </Card.Title>
                <Card.Text></Card.Text>
                <div class="mt-3" style={{ textAlign: "center" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                  </svg>
                </div>

                <div className="text-center pt-3">
                  <h5><b> Work Completed</b></h5>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="me-3">
            <Card
              style={{
                width: "20rem",
                height: "12rem",
                backgroundColor: "purple",
                margin: "10px",
              }}
            >
              <Card.Body>
                <Card.Title className="text-center pt-2">
                  {this.state.salary != 0 && this.state.salary}
                </Card.Title>

                <div class="mt-1" style={{ textAlign: "center" }}>
                  <b>
                    {/*    */}
                  </b>
                </div>
                <Card.Text></Card.Text>


                <div class="mt-3" style={{ textAlign: "center" }}>
                  <img src="https://img.icons8.com/material-outlined/24/000000/rupee.png" />
                </div>
                <div className="text-center pt-3">
                  <h5><b> Salary</b></h5>
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
export default MechanicDashboard;
