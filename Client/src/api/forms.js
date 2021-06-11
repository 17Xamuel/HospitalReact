import axios from "axios";

const url = "http://localhost:8000/api";

export default class FormsApi {
  ///new Patient
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
  //patient Unit
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
  //Payment
  async postNewPayment(data) {
    try {
      const res = await axios.post(`${url}/user/accounts/new_payment`, data);
      return res.data;
    } catch (error) {
      console.error(error);
      return "Error";
    }
  }
  //clinical Info
  async postClinicalInfo(data) {
    try {
      const res = await axios.post(
        `${url}/user/doctor/new_clinical_info`,
        data
      );
      return res.data;
    } catch (error) {
      console.error(error);
      return "Error";
    }
  }

  //diagnosis
  async postDiagnosis(data) {
    try {
      const res = await axios.post(`${url}/user/doctor/new_diagnosis`, data);
      return res.data;
    } catch (error) {
      console.error(error);
      return "Error";
    }
  }
  //lab Request
  async newLabRequest(data) {
    try {
      const res = await axios.post(`${url}/user/doctor/new_lab_request`, data);
      return res.data;
    } catch (error) {
      console.error(error);
      return "Error";
    }
  }

  //Referral from doctor
  async newReferral(data) {
    try {
      const res = await axios.post(`${url}/user/doctor/new_referral`, data);
      return res.data;
    } catch (error) {
      console.error(error);
      return "Error";
    }
  }
  //Report From Lab Technician
  async newSampleCollection(data) {
    try {
      const res = await axios.post(
        `${url}/user/lab/new_sample_collection`,
        data
      );
      return res.data;
    } catch (error) {
      console.error(error);
      return "Error";
    }
  }
  //Report From Lab Technician
  async newLabReport(data) {
    try {
      const res = await axios.post(`${url}/user/lab/new_lab_report`, data);
      return res.data;
    } catch (error) {
      console.error(error);
      return "Error";
    }
  }
}
