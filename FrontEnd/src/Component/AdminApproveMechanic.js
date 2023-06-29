import React, { Component, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminNavbar from "./Navbar/AdminNavbar";
import MechanicService from "./Services/MechanicService";

function AdminApproveMechanic(props) {
  const navigate = useNavigate();
  const [mechanic, setMechanic] = useState([]);

  useEffect(() => {
    MechanicService.getAllMechanics().then((response) => {
      setMechanic(response.data);
      console.log(response.data);
    });
  }, []);

  const updateMechanicHandler = (mech) => {
    navigate("/admin/updateSalary", { state: { updatedMechanicId: mech } });
  };

  const deleteMechanicHandler = (mechid) => {
    MechanicService.deleteOneMechanic(mechid)
      .then(window.location.reload(false))
      .catch();
  };

  return (
    <div>
      <AdminNavbar />
      <Container className="text-center mt-3 ">
        <h1 className="p-3" align="center" style={{ color: "green" }}>
          Approve Mechanics
        </h1>
        <Table bordered>
          <thead>
            <tr style={{ color: "green" }}>
              <th>Name</th>
              <th>Mobile No</th>
              <th>Address</th>
              <th>Skills</th>

              <th>Approve</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {mechanic.map((mech) => {
              return (
                <tr key={mech.mechanicID} style={{ color: "gray" }}>
                  <td>{mech.firstName}</td>

                  <td>{mech.mobileNo}</td>

                  <td>{mech.address}</td>
                  <td>{mech.skills}</td>

                  <td>
                    {" "}
                    <button
                      className="btn btn-success"
                      onClick={() => updateMechanicHandler(mech)}
                    >
                      Approve
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteMechanicHandler(mech.mechanicID)}
                    >
                      Delete
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

export default AdminApproveMechanic;
