import React, { Component } from "react";
import { Container, Table } from 'react-bootstrap';


import CustomerNavbar from "./Navbar/CustomerNavbar";
import RequestService from "./Services/RequestService";
import CustomerService
  from "./Services/CustomerService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function ApprovedRequest() {

  const [requests, setRequests] = useState([])
  const navigate = useNavigate();

  const handleClick = (req) => {


    navigate('/Customer/feedback', { state: { updatedrequestId: req } });


  }
  useEffect(() => {
    let localUser = JSON.parse(localStorage.getItem("user"));
    const user = {
      id: localUser.id,
      emailId: localUser.emailId,
      password: localUser.password,
      role: localUser.role
    }
    console.log(localUser);
    CustomerService.getCustomerByUser(user).then((res) => {
      console.log(res.data)
      RequestService.ApprovedAndWIPRequests(res.data.customerID).then((response) => {
        setRequests(response.data);
        console.log(response.data)
      });



    })
  }, [])





  return (

    <div>
      <CustomerNavbar />
      <Container className="text-center mt-3 ">
        <h1 className="p-3" align="center" style={{ color: 'Green' }} >Approved Request</h1>
        <Table bordered>
          <thead>
            <tr style={{ color: 'orange' }} >
              <th>Vehicle Name</th>
              <th>Vehicle Number</th>
              <th>Problem Description </th>
              <th>Enquiry Date</th>
              <th>Status</th>
              <th>Send FeedBack</th>

            </tr>
          </thead>
          <tbody>
            {requests.map((req) => {
              return (
                <tr style={{ color: 'gray' }} >
                  <td>{req.vehicleName}</td>

                  <td>{req.vehicleNo}</td>
                  <td>{req.problemDescription}</td>
                  <td>{req.enquiryDate}</td>
                  <td>{req.status}</td>
                  <td>{req.status === "Released" && <button

                    className="btn btn-success" onClick={() => handleClick(req.requestId)}>Send</button>}

                  </td>


                </tr>

              );
            })}

          </tbody>
        </Table>
      </Container>
    </div>
  );
}


export default ApprovedRequest;