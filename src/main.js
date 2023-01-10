import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3010", // endereço da api
});

axiosInstance.defaults.headers.common["Content-Type"] = "application/json";
createApp(App).use(store).use(router).mount("#app");
