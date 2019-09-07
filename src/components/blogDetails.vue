<template>
  <div class="container-fluid">
    <div class="col-lg-6 m-auto">
      <h2 style="margin-bottom: 2rem">
        <i class="fa fa-user-o"></i> Nastavnici na studiju:
      </h2>
      <ul class="list-group">
        <li v-bind:key="blog.id" v-for="blog in blogDetail" class="list-group-item m-2 border-dark">
          <h5>
            {{blog.akademskiStupanj}}
            {{blog.ime}}
            {{blog.prezime}}
          </h5>
          <hr />
          <div>
            <b>Zvanje:</b>
            {{blog.zvanje}}
          </div>
          <div>
            <b>e-mail:</b>
            {{blog.eMail}}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blogDetail: {}
    };
  },
  created() {
    this.$http
      .get(
        "https://is.sum.ba:4443/ISSApi/resources/fakulteti/5/studiji/" +
          this.id +
          "/nastavnici"
      )
      .then(function(data) {
        this.blogDetail = data.body;
      });
  }
};
</script>
<style>
</style>