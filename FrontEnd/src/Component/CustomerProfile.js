import React from "react";

import { useNavigate } from "react-router-dom";
import Marquee from "./Marquee";
import CustomerNavbar from "./Navbar/CustomerNavbar";
import { useEffect, useState } from "react";
import CustomerService from "./Services/CustomerService";

export default function CustomerProfile() {
  const navigate = useNavigate();

  const customerObject = {
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    mobileNo: "",
    address: "",
  };
  const [customer, setCustomer] = useState(customerObject);
  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    const user = {
      id: localUser.id,
      emailId: localUser.emailId,
      password: localUser.password,
      role: localUser.role,
    };
    console.log(localUser);
    CustomerService.getCustomerByUser(user).then((res) => {
      setCustomer(res.data);
    });

    return () => {};
  }, []);
  // const Card = (props) => {
  return (
    <div>
      <CustomerNavbar />
      <div className="row" style={{ margin: "15px 600px" }}>
        <div
          className="col"
          style={{
            justifycontent: "center",
            alignitems: "center",
            display: "flex",
          }}
        >
          <img
            src="../Images/User.png"
            className="p-3 rounded-circle "
            style={{ height: "150px", width: "150px", marginLeft: "100px" }}
          />
        </div>
        <div>
          <h3
            style={{
              textAlign: "center",
              fontFamily: "cursive",
              color: "orange",
            }}
          >
            Customer Profile
          </h3>
          <br></br>
          <div className="col m-0 ">
            <table
              style={{ width: "30rem", marginLeft: "20px", color: "#884EA0" }}
            >
              <tr>
                <td>
                  <h5>First Name: </h5>
                </td>
                <td>
                  <h5 style={{ fontFamily: "cursive" }}>
                    {customer.firstName}
                  </h5>
                </td>
                <br></br>
              </tr>
              <tr>
                <td>
                  <h5>Last Name: </h5>
                </td>
                <td>
                  <h5 style={{ fontFamily: "cursive" }}>{customer.lastName}</h5>
                </td>
                <br></br>
              </tr>
              <tr>
                <td>
                  <h5>Email ID: </h5>
                </td>
                <td>
                  <h5 style={{ fontFamily: "cursive" }}>{customer.emailId}</h5>
                </td>
                <br></br>
              </tr>
              <tr>
                <td>
                  <h5>Mobile No: </h5>
                </td>
                <td>
                  <h5 style={{ fontFamily: "cursive" }}>{customer.mobileNo}</h5>
                </td>
                <br></br>
              </tr>
              <tr>
                <td>
                  <h5>Address </h5>
                </td>
                <td>
                  <h5 style={{ fontFamily: "cursive" }}>{customer.address}</h5>
                </td>
                <br></br>
              </tr>
              <tr>
                <td>
                  {" "}
                  <button
                    className="btn btn-primary m-2"
                    onClick={() => {
                      navigate("/CustomerEditProfile");
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-primary m-2"
                    onClick={() => {
                      navigate("/CustomerDashboard");
                    }}
                  >
                    Back
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "0", width: "120%" }}>
        <Marquee />
      </div>
    </div>
  );
}
// }
