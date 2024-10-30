<template>
  <NavBar />
    <div class="content-wrapper">
      <router-view />
    </div>
</template>

<script>
import NavBar from '@/views/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
body, html {
 height: 100%;
  margin: 0;
  font-family: 'Bellefair', serif;
  padding: 0;
}
.content-wrapper {
   padding-top:70px; 
}
h1, h2, h3, h4 {
  font-family: 'Bellefair', serif;
}
p {
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  line-height: 32px;
}
@media (max-width: 576px) {
  .explore-button {
    width: 150px;
    height: 150px;
    font-size: 20px;
  }
  
}
</style>