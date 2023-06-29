import React, { Component, useEffect, useState } from "react";
import { Container, Table } from 'react-bootstrap';



import RequestService from "./Services/RequestService";




import AdminNavbar from "./Navbar/AdminNavbar";


function AdminServiceCost() {


  const [requests, setRequests] = useState([]);





  useEffect(() => {

    RequestService.getAllCustomerAndRequests().then((response) => {
      setRequests(response.data);
      console.log(response.data)
    });
  }, [])

  const filteredData = requests.filter(item => item.status !== "Pending");

  return (

    <div>
      <AdminNavbar />
      <Container className="text-center mt-3 ">
        <h1 className="p-3" align="center" style={{ color: 'red' }} >Service Cost</h1>
        <Table bordered>
          <thead>
            <tr>
              <th>Customer Name</th>

              <th>Vehicle Name</th>
              <th>Vehicle Number</th>
              <th>Vehicle Category</th>

              <th>Problem Description </th>
              <th>Status</th>

              <th>Service Cost</th>


            </tr>
          </thead>
          <tbody>
            {filteredData.map((req) => {
              console.log(req.customerID)
              return (
                <tr key={req.requestId}>
                  <td>{req.customer.firstName}</td>

                  <td>{req.vehicleName}</td>
                  <td>{req.vehicleNo}</td>
                  <td >{req.vehicleCategory}</td>

                  <td>{req.problemDescription}</td>
                  <td >{req.status}</td>

                  <td >{req.bill}</td>



                </tr>

              );
            })}

          </tbody>
        </Table>
      </Container>
    </div>
  );
}


export default AdminServiceCost;