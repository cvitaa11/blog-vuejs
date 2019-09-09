<template>
  <div class="container-fluid">
    <div class="col-lg-5 m-auto">
      <h1>Svi studiji</h1>
      <input type="text" v-model="search" placeholder="Pretraživanje..." class="form-control" />
    </div>
    <div id="show-blogs">
      <div v-bind:key="blog.id" v-for="blog in filteredBlogs" class="card border-dark">
        <router-link v-bind:to="'/blog/'+blog.id">
          <div class="card-header">
            <h3 class="blog-title card-title text-dark">
              <i class="fa fa-book p-1"></i>
              <b>{{ blog.naziv}}</b>
            </h3>
          </div>
        </router-link>
        <div class="card-body">
          <p>
            <b>Kratica:</b>
            {{blog.kratica}}
          </p>
          <p>
            <b>Izvedba:</b>
            {{blog.izvedba}}
          </p>
          <p>
            <b>nPredmetni:</b>
            {{blog.nPredmetni}}
          </p>
          <p>
            <b>Broj semestara:</b>
            {{blog.trajanje}}
          </p>
        </div>
        <div class="card-footer text-center">
          <small class="text-muted">&copy; SUM 2019</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//READ THIS ARTICLE FOR PAGINATION https://medium.com/@denny.headrick/pagination-in-vue-js-4bfce47e573b
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
      .get("https://is.sum.ba:4443/ISSApi/resources/fakulteti/5/studiji")
      .then(function(data) {
        this.blogs = data.body;
      });
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.naziv.match(this.search);
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  margin: 2rem auto;
}
</style>
