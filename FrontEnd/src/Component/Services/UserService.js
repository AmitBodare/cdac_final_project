
import axios from "axios";

const url = `http://localhost:9000/user-api`;

class UserService {

  updateNewUser(userId, userObject) {

    return axios
      .put(`${url}/${userId}`, userObject)
  }


}

export default new UserService();

