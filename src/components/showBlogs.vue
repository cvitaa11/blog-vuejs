<template>
  <div id="show-blogs">
    <h1>All blog articles</h1>
    <input type="text" v-model="search" placeholder="Search..." class="form-control" />
    <div
      v-bind:key="blog.id"
      v-for="blog in filteredBlogs"
      class="single-blog card border-secondary"
    >
      <router-link v-bind:to="'/blog/'+blog.id">
        <div class="card-header">
          <h2 class="blog-title card-title text-dark">{{ blog.title}}</h2>
        </div>
      </router-link>
      <div class="card-body">
        <img
          src="https://fpmoz.sum.ba/templates/fpmoz/img/sum_logo_en.png"
          class="card-img-top img-fluid"
          alt="tekst"
        />
        <article class="card-text">{{ blog.body | snippet }}</article>
      </div>
      <p class="card-footer text-center">SUM</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        this.blogs = data.body.slice(0, 10);
      });
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },
  filters: {
    snippet(value) {
      return value.slice(0, 300) + "...";
    }
  }
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
