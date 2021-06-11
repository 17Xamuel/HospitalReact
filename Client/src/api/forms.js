import axios from "axios";

const url = "http://localhost:8000/api";

export default class FormsApi {
  async postPatient(data) {
    try {
      const res = await axios.post(
        `${url}/user/receptionist/new_patient`,
        data
      );
      return res.data;
    } catch (error) {
      console.error(error);
      return "Error";
    }
  }
  async postPatientUnit(data) {
    try {
      const res = await axios.post(
        `${url}/user/receptionist/new_patient_unit`,
        data
      );
      return res.data;
    } catch (error) {
      console.error(error);
      return "Error";
    }
  }
  async postNewPayment(data) {
    try {
      const res = await axios.post(`${url}/user/accounts/new_payment`, data);
      return res.data;
    } catch (error) {
      console.error(error);
      return "Error";
    }
  }
  async postClinicalInfo(data) {
    try {
      const res = await axios.post(
        `${url}/user/accounts/new_clinical_info`,
        data
      );
      return res.data;
    } catch (error) {
      console.error(error);
      return "Error";
    }
  }
}
