import axios from "axios";

const url = "http://localhost:8000/api";

export default class FormsApi {
  static async post(data, i) {
    try {
      const res = await axios.post(`${url}${i}`, data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}
