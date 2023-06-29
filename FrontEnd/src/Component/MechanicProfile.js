import React from "react";

import { useNavigate } from "react-router-dom";
import Marquee from "./Marquee";
import MechanicNavbar from "./Navbar/MechanicNavbar";
import { useState, useEffect } from "react";
import MechanicService from "./Services/MechanicService";
export default function MechanicProfile() {
  const navigate = useNavigate();
  const mechanicObject = {
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    mobileNo: "",
    address: "",
    skills: "",
  };

  const [mechanic, setMechanic] = useState(mechanicObject)
  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    const user = {
      id: localUser.id,
      emailId: localUser.emailId,
      password: localUser.password,
      role: localUser.role
    }
    console.log(localUser);
    MechanicService.getMechanicByUser(user).then((res) => {

      setMechanic(res.data);
    })
    return () => {

    }
  }, [])
  // const Card = (props) => {
  return (
    <div>
      <MechanicNavbar />
      <div className="row" style={{ margin: "15px 600px" }}>
        <div className="col" style={{ justifycontent: "center", alignitems: "center", display: "flex" }}>
          <img src="./Images/Mechanic.jpg" className="p-3 rounded-circle " style={{ height: '150px', width: "150px", marginLeft: "100px" }} />
        </div>
        <div>
          <h3 style={{ textAlign: "center", color: "orange", fontFamily: "cursive" }}>Mechanic Profile</h3><br></br>
          <div className="col">
            <table style={{ width: "25rem", marginLeft: "50px", color: "#884EA0" }} >
              <tr  ><td><h5>First Name: </h5></td><td>< h5 style={{ fontFamily: "cursive" }}>{mechanic.firstName}</h5></td><br></br></tr>
              <tr  ><td><h5>Last Name: </h5></td><td>< h5 style={{ fontFamily: "cursive" }}>{mechanic.lastName}</h5></td><br></br></tr>
              <tr  ><td><h5>Email ID: </h5></td><td>< h5 style={{ fontFamily: "cursive" }}>{mechanic.emailId}</h5></td><br></br></tr>
              <tr  ><td><h5>Mobile No: </h5></td><td>< h5 style={{ fontFamily: "cursive" }}>{mechanic.mobileNo}</h5></td><br></br></tr>
              <tr  ><td><h5>Address </h5></td><td>< h5 style={{ fontFamily: "cursive" }}>{mechanic.address}</h5></td><br></br></tr>
              <tr  ><td><h5>Skills </h5></td><td>< h5 style={{ fontFamily: "cursive" }}>{mechanic.skills}</h5></td><br></br></tr>
              <tr><td><b> <button
                className="btn btn-primary m-2"
                onClick={() => {
                  navigate("/MechanicEditProfile");
                }}
              >
                Update
              </button></b><button
                className="btn btn-primary m-2"
                onClick={() => {
                  navigate("/MechanicDashboard");
                }}
              >
                  Back
                </button></td></tr>
            </table>

          </div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "0" }}>
        <Marquee />
      </div>
    </div>
  );
}
// }
