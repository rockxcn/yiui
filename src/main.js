import Vue from "vue";
import App from "./App";
import VuexStore from "@/vuex/index.js";

import "@/autoload/autoload.js";
import "@/styles/global.scss";

Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
    store: VuexStore,
    ...App,
});
app.$mount();
