import React, { Component, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

import RequestService from "./Services/RequestService";

import { useNavigate } from "react-router-dom";

import AdminNavbar from "./Navbar/AdminNavbar";

function AdminCustomerInvoice() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    RequestService.getAllCustomerAndRequests().then((response) => {
      setRequests(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <AdminNavbar />
      <Container className="text-center mt-3 ">
        <h1 className="p-3" align="center" style={{ color: "green" }}>
          Customer Invoice
        </h1>
        <Table bordered>
          <thead>
            <tr style={{ color: "orange" }}>
              <th>Customer Name</th>
              <th>Vehicle Number</th>
              <th>Date of Enquiry</th>
              <th>Released Date</th>

              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => {
              return (
                <tr key={req.requestId}>
                  <td>{req.customer.firstName}</td>
                  <td>{req.vehicleNo}</td>
                  <td>{req.enquiryDate}</td>

                  <td>{req.releaseDate}</td>
                  <td>{req.bill}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default AdminCustomerInvoice;
