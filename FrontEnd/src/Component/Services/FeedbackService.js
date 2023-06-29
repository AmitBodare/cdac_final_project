import axios from "axios";

const url = `http://localhost:9000/Feedbacks-api`;

class FeedbackService {

  getAllFeedbacks() {

    return axios
      .get(`${url}`)
  }



}






export default new FeedbackService();