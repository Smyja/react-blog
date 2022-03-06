import axios from "axios";
import { api } from "../api";
const authAxios = axios.create();

authAxios.interceptors.request.use((config) => {
  const newConfig = config;
  const token = localStorage.getItem("token");
  console.log(token);
  newConfig.headers = {
    Authorization: `Token ${token}`,
  };
  return newConfig;
});

function login(username, email, password) {
    return axios
      .post(api.auth.login, {
        username,
        email,
        password,
      })
      .then((res) => {
        return res;
       
      });
  
  }
  
function tokenlogin(token) {
    const user = {
        // email: "test@test.com",
        token: token,
        // userId: 1
    }
    localStorage.setItem('user', JSON.stringify(user))
    return user
}
function logout() {
    console.log("Logging out...")
    localStorage.removeItem('user')
}

function isLoggedIn() {
    const user = localStorage.getItem('user')
    return user !== null
}

function getUser() {
    return JSON.parse(localStorage.getItem('user'))
}

const authenticationService = {
    login,
    tokenlogin,
    logout,
    isLoggedIn,
    getUser
}
export {authenticationService,authAxios}