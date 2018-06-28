import axios from "axios";
import env from "../config/env";
import router from "../router";
import VueRouter from "vue-router";

const setTitle = function(title) {
  title = title ? title + " - Home" : "iView project";
  window.document.title = title;
};

export let util = { setTitle };
