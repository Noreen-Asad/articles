import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID b5a8ccfae247b6201e7a52547ee0e2f72d5f0d07cbd0e6b1b9fc2db43afd4600"
  }
});
