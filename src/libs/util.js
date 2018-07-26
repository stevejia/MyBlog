import axios from "axios";
import env from "../config/env";
import router from "../router";
import VueRouter from "vue-router";

const setTitle = function(title) {
  title = title ? title : "世秋的博客-Facynato";
  window.document.title = title;
};

export let util = { setTitle };
