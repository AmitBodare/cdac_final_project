class ApprovedRequest extends Component {

    constructor(props) {
      super(props);
      this.state = {
        requests: [],
      };
    }
    componentDidMount() {
      let customerID = JSON.parse(localStorage.getItem("user")).customer.customerID;
      console.log(customerID);
      RequestService.getReleasedRequestByCustomerID(customerID).then((response) => {
        this.setState({ requests: response.data });
      });
    }

    render() {
  
        return (
    
          <div>
            <CustomerNavbar/>
            <Container className="text-center mt-3 ">
              <h1 className="p-3" align="center" style={{ color: 'green' }} >Released Request</h1>
              <Table bordered>
                <thead>
                  <tr>
                    <th>Request Id</th>
                    <th>Vehicle Name</th>
                    <th>Category</th>
                    <th>Vehicle No</th>
                    <th>Problem Description </th>
                    <th>Enquiry Date</th>
    
                  </tr>
                </thead>
                <tbody>
                  {this.state.requests.map((req) => {
                    return (
                      <tr>
                        <td>{req.requestId}</td>
                        <td>{req.vehicleName}</td>
                        <td>{req.vehicleCategory}</td>
                        <td>{req.vehicleNumber}</td>
                        <td>{req.problemDescription}</td>
                        <td>{req.enquiryDate}</td>
    
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
    
    export default ReleasedRequest;