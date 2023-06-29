


import axios from "axios";

const url = `http://localhost:9000/Mechanic-api`;

class MechanicService {




  getAllMechanics() {


    return axios.get(`http://localhost:9000/Mechanic-api/list`)
  }

  getOneMechanic(mechid) {


    return axios.get(`http://localhost:9000/Mechanic-api/${mechid}`)
  }

  getMechanicByUser(user) {
    return axios.post(`http://localhost:9000/Mechanic-api/getMechanic`, user)
  }

  deleteOneMechanic(mechid) {
    return axios.delete(`http://localhost:9000/Mechanic-api/${mechid}`)
  }


}






export default new MechanicService();
