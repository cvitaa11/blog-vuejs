import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Routes from "./routes";

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.headers.common["issApiAccessToken"] =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJGUE1PWl9JU1NBUEkiLCJyb2xlIjoiQVBJIiwiaXNzIjoiaXNzQXBpIiwiZXhwIjoxNTY3OTM2Nzk5LCJpYXQiOjE1Njc4NTI0NjJ9.Sy5G7hzlFhqXFSppd_BJ8h1skfojvTkWg9A3NOVDjeU";

const router = new VueRouter({
  routes: Routes,
  mode: "history"
});

new Vue({
  render: h => h(App),
  router: router
}).$mount("#app");
