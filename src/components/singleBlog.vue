<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <img
      class="img-fluid"
      src="https://fpmoz.sum.ba/templates/fpmoz/img/sum_logo_en.png"
      alt="Fakultet id"
    />
    <article>{{blog.body}}</article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts/" + this.id)
      .then(function(data) {
        this.blog = data.body;
      });
  }
};
</script>
<style>
#single-blog {
  max-width: 960px;
  padding: 2rem 2rem;
  margin: 0 auto;
}
</style>