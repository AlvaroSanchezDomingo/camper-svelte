import axios from "axios";
import {user} from "../stores";

export class Service {
  parkingList = [];
  baseUrl = "";

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    if (localStorage.donation) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.donation);
    }
  }

  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      console.log(response.data)
      if (response.data.success) {
        user.set({
          email: email,
          token: response.data.token,
          level: response.data.level
        });
        localStorage.donation = JSON.stringify(response.data.token);
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async logout() {
    user.set({
      email: "",
      token: "",
      level:99
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.donation = null;
  }
  async getUsers() {
    try {
      const response = await axios.get(this.baseUrl + "/api/users");
      return response.data;
    } catch (e) {
      return null;
    }
  }
  async getUser(id) {
    try {
      const response = await axios.get(this.baseUrl + "/api/users/" + id);
      return response.data;
    } catch (e) {
      return null;
    }
  }
  async updateSettings(firstName, lastName, email, password, level, id) {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        level: level,
        _id: id
      };
      console.log(userDetails);
      const response = await axios.put(`${this.baseUrl}/api/users/${id}`, userDetails);
      const newUser = await response.data;
      user.set(newUser);
      return true;
    } catch (error) {
      return false;
    }
  }

  async createUser(user) {
    try {
      const response = await axios.post(this.baseUrl + "/api/users", user);
      const newUser = await response.data;
      if (newUser){
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
  async deleteOneUser(id) {
    try {
      const response = await axios.delete(this.baseUrl + "/api/users/" + id);
      return response.data;
    } catch (e) {
      return null;
    }
  }
  async authenticate(user) {
    try {
      const response = await axios.post(this.baseUrl + "/api/users/authenticate", user);
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      return response.data;
    } catch (e) {
      return null;
    }
  }
  async clearAuth(user) {
    axios.defaults.headers.common["Authorization"] = "";
  }
  async createParking(newParking) {
    try {
      const response = await axios.post(this.baseUrl + "/api/parkings", newParking);
      return response.data;
    } catch (e) {
      return null;
    }
  }
  async updateParking(id, updatedParking) {
    try {
      const response = await axios.post(this.baseUrl + "/api/parkings/update/"+id, updatedParking);
      return response.data;
    } catch (e) {
      return null;
    }
  }
  async getParkings() {
    try {
      const response = await axios.get(this.baseUrl + "/api/parkings");
      return response.data;
    } catch (e) {
      return null;
    }
  }
  async getParking(id) {
    try {
      const response = await axios.get(this.baseUrl + "/api/parkings/"+ id);
      return response.data;
    } catch (e) {
      return null;
    }
  }
  async getParkingUser() {
    try {
      const response = await axios.get(this.baseUrl + "/api/parkings/user");
      return response.data;
    } catch (e) {
      return null;
    }
  }
  async deleteAllParkings() {
    try {
      const response = await axios.delete(this.baseUrl + "/api/parkings");
      return response.data;
    } catch (e) {
      return null;
    }
  }
  async deleteParkingsId(id) {
    try {
      const response = await axios.delete(this.baseUrl + "/api/parkings/"+ id);
      return response.data;
    } catch (e) {
      return null;
    }
  }
}

