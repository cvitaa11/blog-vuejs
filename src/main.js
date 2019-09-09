import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Routes from "./routes";

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.headers.common["issApiAccessToken"] =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJGUE1PWl9JU1NBUEkiLCJyb2xlIjoiQVBJIiwiaXNzIjoiaXNzQXBpIiwiZXhwIjoxNTY4MTA5NTk5LCJpYXQiOjE1NjgwNTUyMTF9.7a4BNuF_gcAe7MTk7LX1WR0TQAtZkexhX7pi5lZduyk";

const router = new VueRouter({
  routes: Routes,
  mode: "history"
});

new Vue({
  render: h => h(App),
  router: router
}).$mount("#app");
