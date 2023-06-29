


import axios from "axios";

const url = `http://localhost:9000/Request-api`;

class RequestService {

  getAllRequestsWithoutPending() {
    return axios.get(`http://localhost:9000/Request-api/requestsExceptPending`)
  }


  getAllRequestByCustomer(custId) {

    return axios
      .get(`http://localhost:9000/Requests/allCustomers/${custId}`)
  }


  getPendingRequestByCustomerID(custId) {


    return axios
      .get(`http://localhost:9000/Request-api/pendingrequests/${custId}`)
  }



  getApprovedRequestByCustomerID(custId) {
    return axios
      .get(`http://localhost:9000/Request-api/approvedrequests/${custId}`)
  }


  getReleasedRequestByCustomerID(custId) {
    return axios
      .get(`http://localhost:9000/Request-api/releasedrequests/${custId}`)
  }

  deleteRequestByRequestID(reqId) {
    return axios
      .delete(`http://localhost:9000/Request-api/deleterequests/${reqId}`)
  }


  getAllRequestByMechanicId(mechId) {

    return axios
      .get(`http://localhost:9000/Request-api/Mechanic/${mechId}`)
  }
  async getAllRequests() {

    return await axios
      .get(`http://localhost:9000/Request-api`)
  }

  updateRequest(reqid, reqObject) {
    return axios
      .put(`http://localhost:9000/Request-api/${reqid}`, reqObject)
  }

  getOneRequest(reqid) {
    return axios
      .get(`http://localhost:9000/Request-api/${reqid}`)
  }


  ApprovedAndWIPRequests(custId) {
    return axios.get(`http://localhost:9000/Request-api/ApprovedAndWIPRequests/${custId}`)
  }

  getAllCustomerAndRequests() {
    return axios.get(`http://localhost:9000/Request-api/customerAndRequests`)
  }

  getAllPendingRequests() {


    return axios
      .get(`http://localhost:9000/Request-api/pendingrequests`)
  }


  updateFeedbackInRequest(req) {
    return axios
      .put(`http://localhost:9000/Request-api/updateFeedback/${req.requestId}`, req)
  }

  getRequestByVehicleNo(vehicleNo) {
    return axios
      .get(`http://localhost:9000/Request-api/requestByVehicleNo/${vehicleNo}`)
  }

}






export default new RequestService();
