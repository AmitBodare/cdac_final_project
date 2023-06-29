import React, {  useEffect, useState } from "react";
import { Container, Table } from 'react-bootstrap';

import AdminNavbar from "./Navbar/AdminNavbar";
import MechanicService from "./Services/MechanicService";


function ViewAllMechanicSalary(props) {


  const [mechanic, setMechanic] = useState([]);



  useEffect(() => {


    MechanicService.getAllMechanics().then((response) => {
      setMechanic(response.data);
      console.log(response.data)
    });
  }, [])






  return (

    <div>
      <AdminNavbar />
      <Container className="text-center mt-3 ">
        <h1 className="p-3" align="center" style={{ color: 'green' }} >Mechanic Salary</h1>
        <Table bordered>
          <thead>
            <tr style={{ color: 'green' }}>
              <th>Name</th>

              <th>Salary</th>



            </tr>
          </thead>
          <tbody>
            {mechanic.map((mech) => {
              return (
                <tr key={mech.mechanicID} style={{ color: 'gray' }}>
                  <td>{mech.firstName}</td>



                  <td>{mech.salary !== 0 && mech.salary}</td>


                </tr>

              );
            })}

          </tbody>
        </Table>
      </Container>
    </div>
  );
}


export default ViewAllMechanicSalary;