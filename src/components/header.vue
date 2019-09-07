<template>
  <nav>
    <ul>
      <li class="navbar-brand text-white">
        <a href="/" class="text-white">SUM</a>
      </li>
      <li>
        <router-link to="/" exact>Naslovnica</router-link>
      </li>
      <li>
        <router-link to="/about" exact>O nama</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
ul {
  list-style-type: none;
  text-align: left;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
nav {
  background: rgb(22, 2, 134);
  padding: 14px 0;
  margin-bottom: 40px;
}
.router-link-active {
  background: #eee;
  color: #444;
}
</style>