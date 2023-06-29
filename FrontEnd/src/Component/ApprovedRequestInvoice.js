import React, { Component } from "react";
import { Container, Table } from 'react-bootstrap';
import CustomerNavbar from "./Navbar/CustomerNavbar";

import RequestService from "./Services/RequestService";
import CustomerService from "./Services/CustomerService";

class ApprovedRequestInvoice extends Component {

  constructor(props) {
    super(props);
    this.state = {
      requests: [],
    };
  }

  componentDidMount() {
    let localUser = JSON.parse(localStorage.getItem("user"));
    const user = {
      id: localUser.id,
      emailId: localUser.emailId,
      password: localUser.password,
      role: localUser.role
    }
    console.log(localUser);
    CustomerService.getCustomerByUser(user).then((res) => {

      RequestService.ApprovedAndWIPRequests(res.data.customerID).then((response) => {
        this.setState({ requests: response.data });
      });
    }
    )
  }


 
  render() {

    return (

      <div>
        <CustomerNavbar />
        <Container className="text-center mt-3 ">
          <h1 className="p-3" align="center" style={{ color: 'green' }} >Approved Request Invoice</h1>
          <Table bordered>
            <thead>
              <tr style={{ color: 'orange' }} >
                <th>Vehicle Name</th>
                <th>Vehicle Number</th>
                <th>Enquiry Date</th>
                <th>Status</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {this.state.requests.map((req) => {
                return (
                  <tr style={{ color: 'gray' }} >
                    <td>{req.vehicleName}</td>
                    <td>{req.vehicleNo}</td>
                    <td>{req.enquiryDate}</td>
                    <td>{req.status}</td>
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
}

export default ApprovedRequestInvoice;