import React, { Component, useEffect, useState } from "react";
import { Container, Table } from 'react-bootstrap';


import RequestService from "./Services/RequestService";


import { useNavigate } from 'react-router-dom';

import AdminNavbar from "./Navbar/AdminNavbar";



function EnquiryMadeByCustomer(props) {

  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchArray, setSearchArray] = useState([])
  const [boolvalue, setBool] = useState(true)


  useEffect(() => {


    RequestService.getAllCustomerAndRequests().then((response) => {
      setRequests(response.data)

      console.log(response.data)
    });
  }, [])

  const updateRequestHandler = (req) => {
    navigate('/admin/changeRequest', { state: { updatedrequestId: req } })
  }

  const deleteRequestHandler = (reqid) => {

    RequestService.deleteRequestByRequestID(reqid).then(window.location.reload(false)).catch();

  }

  const searchButtonHandler = (vehicleNo) => {

    RequestService.getRequestByVehicleNo(vehicleNo).then((res) => {

      setSearchArray(res.data)
      setBool(false)
    })
  }

  const original = (requests) => {
    const array = requests.map((req) => {
      return (
        <tr key={req.requestId} style={{ color: "gray" }}  >
          <td>{req.customer.firstName}</td>
          <td>{req.vehicleName}</td>
          <td>{req.vehicleNo}</td>
          <td >{req.vehicleCategory}</td>

          <td>{req.problemDescription}</td>
          <td >{req.status}</td>

          <td>    <button className="btn btn-success" onClick={() => updateRequestHandler(req)}>Update</button>


          </td>
          <td>    <button className="btn btn-danger" onClick={() => deleteRequestHandler(req.requestId)}>Delete</button>


          </td>




        </tr>

      );
    })
    return array;
  }

  const newArray = (searchArray) => {
    const array = searchArray.map((req) => {
      return (
        <tr key={req.requestId} style={{ color: "gray" }}  >
          <td>{req.customer.firstName}</td>
          <td>{req.vehicleName}</td>
          <td>{req.vehicleNo}</td>
          <td >{req.vehicleCategory}</td>

          <td>{req.problemDescription}</td>
          <td >{req.status}</td>

          <td>    <button className="btn btn-success" onClick={() => updateRequestHandler(req)}>Update</button>


          </td>
          <td>    <button className="btn btn-danger" onClick={() => deleteRequestHandler(req.requestId)}>Delete</button>


          </td>




        </tr>

      );
    })

    return array;
  }

  return (

    <div>
      <AdminNavbar />

      <div className="mt-3">
        <h1 style={{ color: 'green', marginLeft: "200px", display: 'inline' }} >Approve Enquiry Made By Customer</h1>
        <input
          type="text"
          placeholder="Enter Vehicle No"
          style={{ marginLeft: "230px", height: "42px", width: "200px", fontSize: '1.2rem' }}
          onChange={(e) =>
            searchButtonHandler(e.target.value)}
        />

      </div>

      <Container className="text-center mt-3 ">


        <Table bordered>
          <thead>
            <tr style={{ color: "orange" }}>
              <th>Customer Name</th>
              <th>Vehicle Name</th>
              <th>Vehicle Number</th>
              <th>Vehicle Category</th>

              <th>Problem Description </th>
              <th>Status</th>
              <th>Update Status</th>
              <th>Delete</th>


            </tr>
          </thead>
          <tbody>
            {boolvalue ? original(requests) : newArray(searchArray)}

          </tbody>
        </Table>
      </Container>
    </div>
  );
}


export default EnquiryMadeByCustomer;