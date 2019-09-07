<template>
  <footer class="pt-4 mt-4">
    <div class="container text-left p-3" style="margin-bottom: 2rem">
      <div class="container row">
        <div class="col-sm-4">
          <h5 class="text-white">Sveučilište u Mostaru</h5>
          <ul>
            <li class="text-white">
              <a
                class="text-white"
                href="https://www.sum.ba/sum/sveuciliste/povijest"
                target="_blank"
              >O nama</a>
            </li>
            <li class="text-white">
              <a
                class="text-white"
                href="https://www.sum.ba/objave/upisi"
                target="_blank"
              >Postani student</a>
            </li>
            <li class="text-white">
              <a class="text-white" href="https://www.sum.ba/kontakt" target="_blank">Kontakt</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-4">
          <h5 class="text-white">Linkovi</h5>
          <ul>
            <li class="text-white">
              <a
                class="text-white"
                href="https://fpmoz.sum.ba/index.php?lang=hr"
                target="_blank"
              >FPMOZ</a>
            </li>
            <li class="text-white">
              <a class="text-white" href="http://fsre.sum.ba/naslovnica/" target="_blank">FSRE</a>
            </li>
            <li class="text-white">
              <a class="text-white" href="#">SUMIT</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-4">
          <div class="col-lg-10">
            <a href="https://www.sum.ba/" target="_blank">
              <img src="@/assets/sumLogo.png" class="img-fluid" alt="logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright text-center text-secondary py-3">&copy; Copyright SUM 2019</div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
footer {
  background-color: rgb(22, 2, 134);
  height: 100%;
}
ul {
  list-style-type: circle;
}
</style>