import React, {  useEffect } from "react";
import { Container, Table } from 'react-bootstrap';

import { Button } from 'react-bootstrap';
import RequestService from "./Services/RequestService";
import MechanicNavbar from "./Navbar/MechanicNavbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MechanicService from "./Services/MechanicService";



function MechanicWorkAssign() {





  const navigate = useNavigate();
  const [requests, setRequest] = useState([])

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {

      document.body.style.overflow = 'visible';
    };


    const localUser = JSON.parse(localStorage.getItem("user"));
    const user = {
      id: localUser.id,
      emailId: localUser.emailId,
      password: localUser.password,
      role: localUser.role
    }
    console.log(user);
    MechanicService.getMechanicByUser(user).then((res) => {
      RequestService.getAllRequestByMechanicId(res.data.mechanicID).then((response) => {
        console.log(JSON.stringify(response.data))
        const delay = async () => {
          await new Promise(resolve => setTimeout(resolve, 1000)); // wait for 1 second
        
        };
        delay();
        setRequest(response.data);
        console.log(requests)

      });

    })
  }, [])


  const updateStatusHandler = (req) => {

    navigate('/mechanic/changeRequestStatus', { state: { updatedrequestId: req } });
  }




  return (

    <div>
      <MechanicNavbar />



























      <Container className="text-center mt-3 ">
        <h1 className="p-3" align="center" style={{ color: 'green' }} >Update Work Status</h1>
        <Table bordered>
          <thead>
            <tr style={{ color: "orange" }}>
              <th>Vehicle Name</th>
              <th>Category</th>
              <th>Number</th>
              <th>Model</th>
              <th>Brand</th>
              <th>Problem Description </th>
              <th>Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody >
            {requests.map((req) => {
              return (
                <tr style={{ color: "gray" }}>
                  <td>{req.vehicleName}</td>
                  <td>{req.vehicleCategory}</td>
                  <td>{req.vehicleNo}</td>
                  <td>{req.vehicleModel}</td>
                  <td>{req.vehicleBrand}</td>
                  <td>{req.problemDescription}</td>
                  <td>{req.status}</td>


                  <td><Button as="a" variant="success" onClick={() => updateStatusHandler(req)}>
                    Update Status
                  </Button></td>
                </tr>

              );
            })}

          </tbody>
        </Table>
      </Container>
    </div>
  );
}


export default MechanicWorkAssign;