import React, {  useEffect, useState } from "react";
import { Container, Table } from 'react-bootstrap';


import { useNavigate } from 'react-router-dom';

import AdminNavbar from "./Navbar/AdminNavbar";
import MechanicService from "./Services/MechanicService";


function ViewAllMechanic(props) {

  const navigate = useNavigate();
  const [mechanic, setMechanic] = useState([]);



  

  useEffect(() => {


    MechanicService.getAllMechanics().then((response) => {
      setMechanic(response.data);
      console.log(response.data)
    });
  }, [])

  const updateMechanicHandler = (mechId) => {

    // const data = {
    //     name: 'John',
    //     age: 30
    //   };
    //   props.history.push({
    //     pathname: '/admin/updateCustomer',
    //     state: { cust }
    //   });
    navigate('/admin/updateMechanic', { state: { updatedMechanicId: mechId } });


  }

  const deleteMechanicHandler = (mechid) => {

    MechanicService.deleteOneMechanic(mechid).then(window.location.reload(false)).catch();

  }

  return (

    <div>
      <AdminNavbar />
      <Container className="text-center mt-3 ">
        <h1 className="p-3" align="center" style={{ color: 'green' }} >Mechanics</h1>
        <Table bordered>
          <thead>
            <tr style={{ color: 'green' }}>
              <th>Name</th>
              <th>Mobile No</th>
              <th>Address</th>
              <th>Skills</th>
              <th>Salary</th>
              <th>Update</th>
              <th>Delete</th>


            </tr>
          </thead>
          <tbody>
            {mechanic.map((mech) => {
              return (
                <tr key={mech.mechanicID} style={{ color: 'gray' }}>
                  <td>{mech.firstName}</td>

                  <td >{mech.mobileNo}</td>

                  <td>{mech.address}</td>
                  <td>{mech.skills}</td>
                  <td>{mech.salary !== 0 && mech.salary}</td>


                  <td>    <button className="btn btn-success" onClick={() => updateMechanicHandler(mech.mechanicID)}>Update</button>


                  </td>
                  <td>    <button className="btn btn-danger" onClick={() => deleteMechanicHandler(mech.mechanicID)}>Delete</button>


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


export default ViewAllMechanic;