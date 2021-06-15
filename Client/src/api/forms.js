import axios from "axios";

const url = "http://localhost:8000/api";

export default class FormsApi {
  async post(i, data) {
    try {
      const res = await axios.post(`${url}${i}`, data);
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}
