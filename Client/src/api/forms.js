import React from "react";
import axios from "axios";

const url = "http://localhost:8080/api";

export default class FormsApi {
  async postPatient(data) {
    try {
      const res = await axios.post(
        `${url}/user/receptionist/new_patient`,
        data
      );
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  }
}
