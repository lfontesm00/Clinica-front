import axios from "axios";

export function SetupAuthClient() {
  const auth = axios.create({
    baseURL: `http://localhost:5000`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  });

  //auth.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return auth;
}
