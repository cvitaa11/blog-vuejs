<template>
  <div id="single-blog">
    <h1>
      <i class="fa fa-book"></i>
      {{blog.naziv}}
    </h1>
    <div class="list-group">
      <p class="list-group-item">
        <b>Fakultet:</b>
        {{blog.faks}}
      </p>
      <p class="list-group-item">
        <b>Kratica:</b>
        {{blog.kratica}}
      </p>
      <p class="list-group-item">
        <b>Izvedba:</b>
        {{blog.izvedba}}
      </p>
      <p class="list-group-item">
        <b>nPredmetni:</b>
        {{blog.nPredmetni}}
      </p>
      <p class="list-group-item">
        <b>Trajanje:</b>
        {{blog.trajanje}}
      </p>
      <router-link v-bind:to="'/blog/'+blog.id+'/nastavnici'">
        <p class="list-group-item list-group-item-action">
          <b>
            <i class="fa fa-users"></i> Nastavnici studija
          </b>
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
      plan: {}
    };
  },
  created() {
    this.$http
      .get(
        "https://is.sum.ba:4443/ISSApi/resources/fakulteti/5/studiji/" +
          this.id,
        {
          headers: {
            issApiAccessToken:
              "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJGUE1PWl9JU1NBUEkiLCJyb2xlIjoiQVBJIiwiaXNzIjoiaXNzQXBpIiwiZXhwIjoxNTY3ODUwMzk5LCJpYXQiOjE1Njc3NzQ1OTZ9.33B7bBTytW21WNBA_jNr3TW-ptPogMJ1u1RpmVvPjNs"
          }
        }
      )
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