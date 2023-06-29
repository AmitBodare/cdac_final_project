import React, { Component, useEffect, useState } from "react";
import { Container, Table } from 'react-bootstrap';


import RequestService from "./Services/RequestService";



import { useNavigate } from 'react-router-dom';

import AdminNavbar from "./Navbar/AdminNavbar";


function AdminCustomerEnquiry() {

  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);



  

  useEffect(() => {


    RequestService.getAllCustomerAndRequests().then((response) => {
      setRequests(response.data);
      console.log(response.data)
    });
  }, [])



  return (

    <div>
      <AdminNavbar />
      <Container className="text-center mt-3 ">
        <h1 className="p-3" align="center" style={{ color: 'green' }} >Enquiries Made By Customer</h1>
        <Table bordered>
          <thead>
            <tr style={{ color: "orange" }}>
              <th>Customer Name</th>
              <th>Vehicle Name</th>
              <th>Vehicle Number</th>
              <th>Vehicle Category</th>

              <th>Problem Description </th>
              <th>Status</th>



            </tr>
          </thead>
          <tbody>
            {requests.map((req) => {
              return (
                <tr key={req.requestId} style={{ color: "gray" }}  >
                  <td>{req.customer.firstName}</td>
                  <td>{req.vehicleName}</td>
                  <td>{req.vehicleNo}</td>
                  <td >{req.vehicleCategory}</td>

                  <td>{req.problemDescription}</td>
                  <td >{req.status}</td>






                </tr>

              );
            })}

          </tbody>
        </Table>
      </Container>
    </div>
  );
}


export default AdminCustomerEnquiry;