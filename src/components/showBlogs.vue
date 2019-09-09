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
    <!-- PAGINATION BUTTONS -->
    <button @click="prevPage" :disabled="pageNumber==0">
      Previous
    </button>
    <button @click="nextPage" :disabled="pageNumber >= pageCount() -1">
      Next
    </button>
    <!-- END OF PAGINATION BUTTONS -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      search: "",
      pageNumber: 0, // INITIAL PAGE NUMBER
      size: 10 // HOW MUCH ITEMS WILL BE DISPLAYED
    };
  },
  created() {
    this.$http
      .get("https://is.sum.ba:4443/ISSApi/resources/fakulteti/5/studiji")
      .then(function(data) {
        this.blogs = data.body;
      });
  },
  computed: {
    filteredBlogs: function() {
      const start = this.pageNumber * this.size,
              end = start + this.size;

      return this.blogs.filter(blog => {
        return blog.naziv.match(this.search);
      }).splice(start,end);

    }
  },
  filters: {
    snippet(value) {
      return value.slice(0, 300) + "...";
    }
  },
  methods: {
    //USE IT FOR DISPLAYED PROP ON NEXT BUTTON
    pageCount(){
      let l = this.blogs.length,
              s = this.size;
      return Math.ceil(l/s);
    },
    nextPage(){
      this.pageNumber++;
    },
    prevPage(){
      this.pageNumber--;
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
