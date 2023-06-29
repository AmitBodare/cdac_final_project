import React, { Component, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

import RequestService from "./Services/RequestService";

import { useNavigate } from "react-router-dom";
import AdminNavbar from "./Navbar/AdminNavbar";

function ApproveEnquiry() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    RequestService.getAllPendingRequests().then((response) => {
      setRequests(response.data);
      console.log(response.data);
    });
  }, []);

  const handleClick = (req) => {
    navigate("/admin/changeRequest", { state: { updatedrequestId: req } });
  };

  return (
    <div>
      <AdminNavbar />
      <Container className="text-center mt-3 ">
        <h1 className="p-3" align="center" style={{ color: "green" }}>
          Approve Request
        </h1>
        <Table bordered>
          <thead>
            <tr style={{ color: "orange" }}>
              <th>Vehicle Name</th>
              <th>Vehicle Category</th>
              <th>Vehicle Number</th>
              <th>Problem Description </th>
              <th>Approve</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => {
              return (
                <tr key={req.requestId} style={{ color: "gray" }}>
                  <td>{req.vehicleName}</td>
                  <td>{req.vehicleCategory}</td>
                  <td>{req.vehicleNo}</td>
                  <td>{req.problemDescription}</td>
                  <td>
                    {" "}
                    <button
                      className="btn btn-success"
                      onClick={() => handleClick(req.requestId)}
                    >
                      Approve
                    </button>
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

export default ApproveEnquiry;
