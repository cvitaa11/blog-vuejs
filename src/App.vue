<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import addBlog from "./components/addBlog";
import showBlogs from "./components/showBlogs";
import header from "./components/header";
import footer from "./components/footer";

export default {
  components: {
    "add-blog": addBlog,
    "show-blogs": showBlogs,
    "app-header": header,
    "app-footer": footer
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
body {
  font-family: "Arial";
  margin: 0;
}
</style>
