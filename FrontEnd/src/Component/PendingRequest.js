import React, { Component } from "react";
import { Container, Table } from 'react-bootstrap';
import CustomerNavbar from "./Navbar/CustomerNavbar";
import { Button } from 'react-bootstrap';
import RequestService from "./Services/RequestService";
import CustomerService from "./Services/CustomerService";

class PendingRequest extends Component {

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





      RequestService.getPendingRequestByCustomerID(res.data.customerID).then((response) => {
        this.setState({ requests: response.data });
      });
    }
    )
  }


  onDeleteClickHandler = (reqId) => {

    RequestService.deleteRequestByRequestID(reqId).then(window.location.reload(false)).catch((error) => {
      window.alert("Request Not deleted")
    });

  }
  render() {

    return (

      <div>
        <CustomerNavbar />
        <Container className="text-center mt-3 ">
          <h1 className="p-3" align="center" style={{ color: 'Green' }} >Pending Request</h1>
          <Table bordered>
            <thead>
              <tr style={{ color: 'orange' }} >
                <th>Vehicle Name</th>
                <th>Category</th>
                <th>Vehicle Number</th>
                <th>Problem Description </th>
                <th>Enquiry Date</th>
                <th>Status</th>
                <th>Delete Enquiry</th>
              </tr>
            </thead>
            <tbody>
              {this.state.requests.map((req) => {
                return (
                  <tr style={{ color: 'gray' }} >
                    <td>{req.vehicleName}</td>
                    <td>{req.vehicleCategory}</td>
                    <td>{req.vehicleNo}</td>
                    <td>{req.problemDescription}</td>
                    <td>{req.enquiryDate}</td>
                    <td>{req.status}</td>
                    <td><Button as="a" variant="danger" onClick={() => { this.onDeleteClickHandler(req.requestId) }}>
                      Delete
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
}

export default PendingRequest;