import axios from "axios";
import Auth from "./auth"

export default {

  newUser: (User) => {
    return axios.post("/api/newUser", User,{ headers :{Authorization: `Bearer ${Auth.getToken()}`}});
  }

}