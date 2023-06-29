import React, { Component, useEffect, useState } from "react";
import { Container, Table } from 'react-bootstrap';
import CustomerService from "./Services/CustomerService";
import { useNavigate } from 'react-router-dom';
import AdminNavbar from "./Navbar/AdminNavbar";


function ViewAllCustomers(props) {

  const navigate = useNavigate();
  const [customers, setCustomer] = useState([]);



  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     requests: [],
  //     loadComponent:false
  //   };
  // }

  useEffect(() => {


    CustomerService.getAllCustomers().then((response) => {
      setCustomer(response.data);
      console.log(response.data)
    });
  }, [])

  const updateCustomerHandler = (custId) => {

    // const data = {
    //     name: 'John',
    //     age: 30
    //   };
    //   props.history.push({
    //     pathname: '/admin/updateCustomer',
    //     state: { cust }
    //   });
    navigate('/admin/updateCustomer', { state: { updatedCustomerId: custId } });


  }

  const deleteCustomerHandler = (custid) => {

    CustomerService.deleteOneCustomer(custid).then(window.location.reload(false)).catch();

  }

  return (

    <div>
      <AdminNavbar />
      <Container className="text-center mt-3 ">
        <h1 className="p-3" align="center" style={{ color: 'green' }} >Customers</h1>
        <Table bordered>
          <thead>
            <tr style={{ color: 'green' }}>
              <th>Name</th>
              <th>Mobile No</th>
              <th>Address</th>

              <th>Update</th>
              <th>Delete</th>


            </tr>
          </thead>
          <tbody>
            {customers.map((cust) => {
              return (
                <tr key={cust.customerID} style={{ color: 'gray' }}>
                  <td>{cust.firstName}</td>

                  <td >{cust.mobileNo}</td>

                  <td>{cust.address}</td>


                  <td>    <button className="btn btn-success" onClick={() => updateCustomerHandler(cust.customerID)}>Update</button>


                  </td>
                  <td>    <button className="btn btn-danger" onClick={() => deleteCustomerHandler(cust.customerID)}>Delete</button>


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


export default ViewAllCustomers;