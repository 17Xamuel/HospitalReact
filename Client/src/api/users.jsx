import axios from "axios";

const url = "http://localhost:8000/api";

export default class UsersApi {
  ///new Patient
  static async login(data) {
    try {
      const res = await axios.post(`${url}/user/admin/login`, data);
      return res.data;
    } catch (error) {
      console.error(error);
      return "Error";
    }
  }
}
