import { Base64 } from "js-base64";
const token = localStorage.getItem("token");
const tokenFrom = token ? JSON.parse(Base64.decode(token)) : null;
const user = {
  user: { user_role: "doctor" },
  // user: tokenFrom ? tokenFrom : null,
};

export default user;
