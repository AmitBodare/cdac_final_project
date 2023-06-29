
import axios from "axios";

const url = `http://localhost:9000/Customer-api`;

class CustomerService {

  getOneCustomer(custId) {

    return axios
      .get(`${url}/${custId}`)
  }

  getCustomerByUser(user) {
    return axios.post(`http://localhost:9000/Customer-api/getCustomer`, user)
  }

  getAllCustomers() {
    return axios.get(`${url}`)
  }

  getOneCustomerByEmailId(emailId) {
    return axios.get(`${url}/email/${emailId}`)
  }

  deleteOneCustomer(custId) {

    return axios
      .delete(`${url}/${custId}`)
  }

}

export default new CustomerService();

